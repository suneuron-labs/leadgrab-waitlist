import { copy } from "@/lib/copy";
import {
  getGraphAccessToken,
  getGraphConfig,
  sendGraphMail,
} from "@/lib/email/graph-client";
import { sendWaitlistConfirmation } from "@/lib/email/send-waitlist-confirmation";
import { getIntendedPlan, type WaitlistSource } from "@/lib/validators";

type SendWaitlistEmailsParams = {
  email: string;
  source?: WaitlistSource;
};

type SendWaitlistEmailsResult =
  | { success: true }
  | { success: false; error: string };

async function sendAdminNotification(
  config: NonNullable<ReturnType<typeof getGraphConfig>>,
  accessToken: string,
  { email, source }: SendWaitlistEmailsParams,
) {
  const ctaSource = source ?? "direct";
  const intendedPlan = getIntendedPlan(source);
  const submittedAt = new Date().toISOString();

  const html = `
    <div style="font-family: sans-serif; line-height: 1.6; color: #0f172a;">
      <p><strong>New beta waitlist signup</strong></p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>CTA source:</strong> ${ctaSource}</li>
        <li><strong>Intended plan:</strong> ${intendedPlan}</li>
        <li><strong>Submitted at:</strong> ${submittedAt}</li>
      </ul>
    </div>
  `.trim();

  await sendGraphMail(config, accessToken, {
    to: config.senderEmail,
    subject: `[New Waitlist Signup] ${email}`,
    html,
    fromName: "LeadGrab Alerts",
  });
}

export async function sendWaitlistEmails(
  params: SendWaitlistEmailsParams,
): Promise<SendWaitlistEmailsResult> {
  const config = getGraphConfig();

  if (!config) {
    return {
      success: false,
      error: "Waitlist admin alerts are not configured.",
    };
  }

  try {
    const accessToken = await getGraphAccessToken(config);
    await sendAdminNotification(config, accessToken, params);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : copy.modal.errorMessage;

    return {
      success: false,
      error: message,
    };
  }

  const confirmation = await sendWaitlistConfirmation({ email: params.email });

  if (!confirmation.success) {
    return confirmation;
  }

  return { success: true };
}
