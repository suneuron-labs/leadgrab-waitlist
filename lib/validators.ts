import { z } from "zod";

export const WAITLIST_SOURCES = {
  heroCta: "Hero CTA",
  closingBanner: "Closing CTA Banner",
  freeTrial: "Free Trial Tier ($0)",
  proMonthly: "Pro Monthly Tier ($12/mo)",
  proAnnual: "Pro Annual Tier ($89/yr)",
} as const;

export const waitlistSourceSchema = z.enum([
  WAITLIST_SOURCES.heroCta,
  WAITLIST_SOURCES.closingBanner,
  WAITLIST_SOURCES.freeTrial,
  WAITLIST_SOURCES.proMonthly,
  WAITLIST_SOURCES.proAnnual,
]);

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid work email"),
  source: waitlistSourceSchema.optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
export type WaitlistSource = z.infer<typeof waitlistSourceSchema>;

export function getIntendedPlan(source?: WaitlistSource): string {
  if (
    !source ||
    source === WAITLIST_SOURCES.heroCta ||
    source === WAITLIST_SOURCES.closingBanner
  ) {
    return "Not specified";
  }

  return source;
}
