"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";
import { useOpenWaitlist } from "@/components/waitlist-context";

export function PricingTable() {
  const { pricing } = copy;
  const openWaitlist = useOpenWaitlist();

  return (
    <section id="pricing" className="w-full scroll-mt-24 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            {pricing.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {pricing.sectionSubtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "flex flex-col rounded-2xl border-slate-800 bg-slate-900/50",
                tier.highlighted &&
                  "border-emerald-500/50 shadow-lg shadow-emerald-500/5 lg:scale-[1.02]",
              )}
            >
              <CardHeader>
                <div className="mb-4 flex min-h-7 justify-center">
                  {tier.badge ? (
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold",
                        tier.highlighted
                          ? "bg-emerald-500 text-black"
                          : "border border-emerald-500/30 bg-slate-900 text-emerald-400",
                      )}
                    >
                      {tier.badge}
                    </span>
                  ) : null}
                </div>
                <CardTitle className="text-lg text-slate-100">
                  {tier.name}
                </CardTitle>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-100">
                    {tier.price}
                  </span>
                  {tier.period ? (
                    <span className="text-sm text-slate-500">{tier.period}</span>
                  ) : null}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  type="button"
                  onClick={() => openWaitlist(tier.waitlistSource)}
                  className={cn(
                    "h-11 w-full rounded-xl font-semibold",
                    tier.highlighted
                      ? "bg-emerald-500 text-black hover:bg-emerald-400"
                      : "border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800",
                  )}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          {pricing.riskReversal}
        </p>
      </div>
    </section>
  );
}
