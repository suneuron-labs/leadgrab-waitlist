import { z } from "zod";

export const waitlistSourceSchema = z.enum(["navbar", "hero", "pricing"]);

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid work email"),
  source: waitlistSourceSchema.optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
export type WaitlistSource = z.infer<typeof waitlistSourceSchema>;
