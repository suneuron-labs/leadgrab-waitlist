import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export function FeatureShowcase() {
  const { showcase } = copy;

  return (
    <section id="how-it-works" className="w-full scroll-mt-24 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            {showcase.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {showcase.sectionSubtitle}
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-8">
          {/* Raw dump */}
          <div className="overflow-hidden rounded-2xl border border-red-500/20 bg-slate-900/50">
            <div className="flex items-center gap-2 border-b border-red-500/20 bg-red-500/5 px-4 py-3">
              <AlertTriangle className="size-4 text-red-400" />
              <h3 className="text-sm font-semibold text-red-300">
                {showcase.rawDump.title}
              </h3>
            </div>
            <div className="overflow-x-auto p-4">
              <table className="w-full min-w-[240px] font-mono text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-left text-slate-500">
                    <th className="pb-2 pr-4 font-medium">name</th>
                    <th className="pb-2 font-medium">phone</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {showcase.rawDump.rows.map((row) => (
                    <tr key={row.name} className="border-b border-slate-800/60">
                      <td className="py-2.5 pr-4 lowercase">{row.name}</td>
                      <td
                        className={cn(
                          "py-2.5",
                          row.phone.includes("E+") &&
                            "font-semibold text-red-400",
                        )}
                      >
                        {row.phone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-slate-800 px-4 py-3 text-xs text-slate-500">
              No country codes · inconsistent casing · Excel corruption risk
            </p>
          </div>

          {/* Arrow divider */}
          <div className="flex items-center justify-center">
            <div className="flex size-10 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 lg:size-12">
              <ArrowRight className="size-5 text-emerald-400 lg:rotate-0 rotate-90" />
            </div>
          </div>

          {/* Organized export */}
          <div className="overflow-hidden rounded-2xl border border-emerald-500/25 bg-slate-900/50">
            <div className="flex items-center gap-2 border-b border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-emerald-300">
                {showcase.organized.title}
              </h3>
            </div>
            <div className="overflow-x-auto p-4">
              <table className="w-full min-w-[320px] text-xs">
                <thead>
                  <tr className="border-b border-slate-700 text-left">
                    {showcase.organized.columns.map((column) => (
                      <th
                        key={column}
                        className="pb-2 pr-3 font-semibold text-slate-300 last:pr-0"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {showcase.organized.rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-slate-800/60 text-slate-300"
                    >
                      <td className="py-2.5 pr-3 font-medium text-slate-100">
                        {row.name}
                      </td>
                      <td className="py-2.5 pr-3 font-mono text-emerald-300/90">
                        {row.phone}
                      </td>
                      <td className="py-2.5 pr-3 font-mono text-slate-400">
                        {row.countryCode}
                      </td>
                      <td className="py-2.5">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-medium",
                            row.role === "Admin"
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-slate-800 text-slate-400",
                          )}
                        >
                          {row.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-slate-800 px-4 py-3 text-xs text-emerald-400/80">
              CRM-ready columns · proper formatting · role labels included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
