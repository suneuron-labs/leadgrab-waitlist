import { LogoMark } from "@/components/logo";
import { copy } from "@/lib/copy";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const { footer } = copy;

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-8" />
              <span className="text-lg font-bold text-slate-100">
                {footer.product}
              </span>
            </div>
            <p className="max-w-xs text-sm text-slate-500">{footer.tagline}</p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-800/80 pt-6">
          <p className="text-center text-[0.7rem] text-slate-500 sm:text-left">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
