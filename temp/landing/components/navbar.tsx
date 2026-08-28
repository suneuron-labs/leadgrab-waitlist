"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

type NavbarProps = {
  onOpenWaitlist?: () => void;
};

export function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCtaClick = () => {
    setMobileOpen(false);
    onOpenWaitlist?.();
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Logo />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            type="button"
            onClick={handleCtaClick}
            className="h-10 rounded-xl bg-emerald-500 px-5 text-sm font-semibold text-black hover:bg-emerald-400"
          >
            {copy.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-800 text-slate-300 transition-colors hover:border-slate-700 hover:bg-slate-900 hover:text-slate-100 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-slate-800/80 bg-slate-950/95 md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4"
          aria-label="Mobile navigation"
        >
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-slate-900 hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
          <Button
            type="button"
            onClick={handleCtaClick}
            className="mt-2 h-11 w-full rounded-xl bg-emerald-500 font-semibold text-black hover:bg-emerald-400"
          >
            {copy.nav.cta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
