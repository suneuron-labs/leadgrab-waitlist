import { Resend } from "resend";
import { copy } from "@/lib/copy";

type SendWaitlistConfirmationParams = {
  email: string;
};

type SendWaitlistConfirmationResult =
  | { success: true }
  | { success: false; error: string };

export async function sendWaitlistConfirmation({
  email,
}: SendWaitlistConfirmationParams): Promise<SendWaitlistConfirmationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return {
      success: false,
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
      success: false,
      error: error.message ?? copy.modal.errorMessage,
    };
  }

  return { success: true };
}
