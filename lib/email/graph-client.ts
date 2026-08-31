type GraphConfig = {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  mailboxUser: string;
  senderEmail: string;
};

type SendGraphMailParams = {
  to: string;
  subject: string;
  html: string;
  fromName?: string;
  replyTo?: string;
};

function getGraphConfig(): GraphConfig | null {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;
  const senderEmail = process.env.WAITLIST_SENDER_EMAIL;
  const mailboxUser = process.env.GRAPH_MAILBOX_USER ?? senderEmail;

  if (!tenantId || !clientId || !clientSecret || !senderEmail || !mailboxUser) {
    return null;
  }

  return { tenantId, clientId, clientSecret, mailboxUser, senderEmail };
}

async function getGraphAccessToken(config: GraphConfig): Promise<string> {
  const response = await fetch(
    `https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    },
  );

  const data = (await response.json()) as {
    access_token?: string;
    error_description?: string;
    error?: string;
  };

  if (!response.ok || !data.access_token) {
    throw new Error(
      data.error_description ?? data.error ?? "Failed to authenticate with Microsoft Graph.",
    );
  }

  return data.access_token;
}

async function sendGraphMail(
  config: GraphConfig,
  accessToken: string,
  { to, subject, html, fromName, replyTo }: SendGraphMailParams,
) {
  const fromAddress =
    config.senderEmail.toLowerCase() !== config.mailboxUser.toLowerCase()
      ? {
          emailAddress: {
            address: config.senderEmail,
            name: fromName,
          },
        }
      : fromName
        ? {
            emailAddress: {
              address: config.mailboxUser,
              name: fromName,
            },
          }
        : undefined;

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(config.mailboxUser)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject,
          body: {
            contentType: "HTML",
            content: html,
          },
          from: fromAddress,
          toRecipients: [{ emailAddress: { address: to } }],
          replyTo: replyTo
            ? [{ emailAddress: { address: replyTo } }]
            : undefined,
        },
        saveToSentItems: true,
      }),
    },
  );

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      error?: { message?: string };
    } | null;

    throw new Error(
      data?.error?.message ?? `Microsoft Graph sendMail failed (${response.status}).`,
    );
  }
}

export type { GraphConfig };
export { getGraphConfig, getGraphAccessToken, sendGraphMail };
