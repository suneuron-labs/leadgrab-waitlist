import { ChevronDown } from "lucide-react";
import { copy } from "@/lib/copy";

export function FaqSection() {
  const { faq } = copy;

  return (
    <section id="faq" className="w-full scroll-mt-24 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            {faq.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {faq.sectionSubtitle}
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 open:border-slate-700"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-100 [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown className="size-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-slate-800 px-5 pb-5 pt-3 text-slate-400 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
