import { NextResponse } from "next/server";
import { sendWaitlistEmails } from "@/lib/email/send-waitlist-emails";
import { waitlistSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = (await request.json()) as unknown;
  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid work email." },
      { status: 400 },
    );
  }

  const result = await sendWaitlistEmails(parsed.data);

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
