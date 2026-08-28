"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { submitWaitlistClient } from "@/lib/submit-waitlist-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { copy } from "@/lib/copy";
import {
  waitlistSchema,
  type WaitlistFormData,
  type WaitlistSource,
} from "@/lib/validators";

type WaitlistFormProps = {
  source?: WaitlistSource;
};

export function WaitlistForm({ source }: WaitlistFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      source,
    },
  });

  useEffect(() => {
    setValue("source", source);
  }, [source, setValue]);

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitError(null);

    const result = await submitWaitlistClient(data);

    if (!result.success) {
      setSubmitError(result.error);
      return;
    }

    const confirmResponse = await fetch("/api/waitlist-confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!confirmResponse.ok) {
      const confirmResult = (await confirmResponse.json()) as {
        error?: string;
      };
      setSubmitError(
        confirmResult.error ??
          "You're on the list, but we couldn't send a confirmation email.",
      );
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-6 text-center">
        <p className="text-sm font-medium text-emerald-400">
          {copy.modal.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          placeholder={copy.modal.emailPlaceholder}
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
          className="h-11 rounded-xl border-slate-700 bg-slate-900/80 px-4 text-slate-100 placeholder:text-slate-500"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        ) : null}
        {submitError ? (
          <p className="text-sm text-red-400">{submitError}</p>
        ) : null}
      </div>

      <input type="hidden" {...register("source")} />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-11 w-full rounded-xl bg-emerald-500 font-semibold text-black hover:bg-emerald-400 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting…
          </>
        ) : (
          copy.modal.submitButton
        )}
      </Button>
    </form>
  );
}
