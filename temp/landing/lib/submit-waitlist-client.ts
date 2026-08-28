import { copy } from "@/lib/copy";
import {
  getIntendedPlan,
  type WaitlistFormData,
} from "@/lib/validators";

export type SubmitWaitlistResult =
  | { success: true }
  | { success: false; error: string };

export async function submitWaitlistClient(
  data: WaitlistFormData,
): Promise<SubmitWaitlistResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      error: "Waitlist is not configured. Add WEB3FORMS_ACCESS_KEY to .env.local.",
    };
  }

  const { email, source } = data;
  const name = email.split("@")[0] ?? "Beta User";
  const ctaSource = source ?? "direct";
  const intendedPlan = getIntendedPlan(source);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        replyto: email,
        subject: `WA LeadGrab Beta Waitlist — ${ctaSource}`,
        from_name: "WA LeadGrab Landing",
        message: [
          "New beta waitlist signup",
          "",
          `Email: ${email}`,
          `CTA source: ${ctaSource}`,
          `Intended plan: ${intendedPlan}`,
          `Submitted at: ${new Date().toISOString()}`,
        ].join("\n"),
        cta_source: ctaSource,
        intended_plan: intendedPlan,
      }),
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (response.status === 200 && result.success) {
      return { success: true };
    }

    return {
      success: false,
      error: result.message ?? copy.modal.errorMessage,
    };
  } catch {
    return { success: false, error: copy.modal.errorMessage };
  }
}
