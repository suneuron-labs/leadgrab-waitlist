"use client";

import { createContext, useContext } from "react";
import type { WaitlistSource } from "@/lib/validators";

type OpenWaitlistFn = (source?: WaitlistSource) => void;

const WaitlistContext = createContext<OpenWaitlistFn | undefined>(undefined);

type WaitlistProviderProps = {
  onOpen: OpenWaitlistFn;
  children: React.ReactNode;
};

export function WaitlistProvider({ onOpen, children }: WaitlistProviderProps) {
  return (
    <WaitlistContext.Provider value={onOpen}>{children}</WaitlistContext.Provider>
  );
}

export function useOpenWaitlist() {
  return useContext(WaitlistContext) ?? (() => {});
}
