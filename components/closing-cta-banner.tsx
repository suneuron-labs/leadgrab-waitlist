"use client";

import { Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOpenWaitlist } from "@/components/waitlist-context";
import { copy } from "@/lib/copy";
import { WAITLIST_SOURCES } from "@/lib/validators";

export function ClosingCtaBanner() {
  const { closingCta } = copy;
  const openWaitlist = useOpenWaitlist();

  return (
    <section className="w-full">
      <div className="mx-auto mb-16 max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/50 p-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          {closingCta.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
          {closingCta.subheadline}
        </p>
        <div className="mt-8">
          <Button
            type="button"
            onClick={() => openWaitlist(WAITLIST_SOURCES.closingBanner)}
            className="h-12 rounded-xl bg-emerald-500 px-6 text-base font-semibold text-black hover:bg-emerald-400"
          >
            <Puzzle className="size-5" />
            {closingCta.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
