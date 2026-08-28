import { Resend } from "resend";
import { copy } from "@/lib/copy";

type SendWaitlistConfirmationParams = {
  email: string;
  source?: string;
};

export async function sendWaitlistConfirmation({
  email,
  source,
}: SendWaitlistConfirmationParams) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return {
      success: false as const,
      error: "Confirmation email is not configured.",
    };
  }

  const resend = new Resend(apiKey);
  const { confirmationEmail } = copy.modal;

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: confirmationEmail.subject,
    html: confirmationEmail.html(),
    text: confirmationEmail.text(),
    replyTo: from,
  });

  if (error) {
    return {
      success: false as const,
      error: error.message ?? copy.modal.errorMessage,
    };
  }

  return { success: true as const };
}
