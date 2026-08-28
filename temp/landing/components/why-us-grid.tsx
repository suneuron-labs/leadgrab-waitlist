import { FileSpreadsheet, ListChecks, RefreshCw, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { copy } from "@/lib/copy";

const cardIcons: LucideIcon[] = [FileSpreadsheet, ListChecks, RefreshCw];

export function WhyUsGrid() {
  const { whyUs } = copy;

  return (
    <section id="features" className="w-full scroll-mt-24 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            {whyUs.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {whyUs.sectionSubtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.cards.map((card, index) => {
            const Icon = cardIcons[index] ?? FileSpreadsheet;

            return (
              <Card
                key={card.title}
                className="rounded-2xl border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700"
              >
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                    <Icon className="size-5 text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg text-slate-100">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-slate-400">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
