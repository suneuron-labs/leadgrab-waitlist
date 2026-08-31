import { copy } from "@/lib/copy";
import type { WaitlistFormData } from "@/lib/validators";

export type SubmitWaitlistResult =
  | { success: true }
  | { success: false; error: string };

export async function submitWaitlistClient(
  data: WaitlistFormData,
): Promise<SubmitWaitlistResult> {
  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as {
      success?: boolean;
      error?: string;
    };

    if (response.ok && result.success) {
      return { success: true };
    }

    return {
      success: false,
      error: result.error ?? copy.modal.errorMessage,
    };
  } catch {
    return { success: false, error: copy.modal.errorMessage };
  }
}
