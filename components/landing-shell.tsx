"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { WaitlistModal } from "@/components/waitlist-modal";
import { WaitlistProvider } from "@/components/waitlist-context";
import type { WaitlistSource } from "@/lib/validators";
import { WAITLIST_SOURCES } from "@/lib/validators";

type LandingShellProps = {
  children: React.ReactNode;
};

export function LandingShell({ children }: LandingShellProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [source, setSource] = useState<WaitlistSource | undefined>();

  const handleOpenWaitlist = (ctaSource?: WaitlistSource) => {
    setSource(ctaSource);
    setModalOpen(true);
  };

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) {
      setSource(undefined);
    }
  };

  return (
    <WaitlistProvider onOpen={handleOpenWaitlist}>
      <Navbar
        onOpenWaitlist={() => handleOpenWaitlist(WAITLIST_SOURCES.heroCta)}
      />
      <HeroSection
        onOpenWaitlist={() => handleOpenWaitlist(WAITLIST_SOURCES.heroCta)}
      />
      {children}
      <WaitlistModal
        open={modalOpen}
        onOpenChange={handleModalOpenChange}
        source={source}
      />
    </WaitlistProvider>
  );
}
