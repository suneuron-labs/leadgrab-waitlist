"use client";

import { Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "@/components/hero-mockup";
import { copy } from "@/lib/copy";

type HeroSectionProps = {
  onOpenWaitlist?: () => void;
};

export function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  const { hero } = copy;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy column */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            {hero.pill}
          </p>

          <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Export WhatsApp Groups & Contacts to{" "}
            <span className="text-emerald-400">{hero.headlineAccent}</span> in 1
            Click
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {hero.subheading}
          </p>

          <div className="mt-10">
            <Button
              type="button"
              onClick={onOpenWaitlist}
              className="h-12 rounded-xl bg-emerald-500 px-6 text-base font-semibold text-black hover:bg-emerald-400"
            >
              <Puzzle className="size-5" />
              {hero.cta}
            </Button>
          </div>

          <p className="mt-6 text-[0.8625rem] whitespace-nowrap text-slate-500">
            {hero.trustSubtext}
          </p>
        </div>

        {/* Mockup column */}
        <div className="lg:justify-self-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
