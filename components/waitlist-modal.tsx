"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WaitlistForm } from "@/components/waitlist-form";
import { copy } from "@/lib/copy";
import type { WaitlistSource } from "@/lib/validators";

type WaitlistModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: WaitlistSource;
};

export function WaitlistModal({
  open,
  onOpenChange,
  source,
}: WaitlistModalProps) {
  const { modal } = copy;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-slate-800 bg-slate-950 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-slate-100">
            {modal.title}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {modal.description}
          </DialogDescription>
        </DialogHeader>

        <WaitlistForm key={`${open}-${source ?? "none"}`} source={source} />
      </DialogContent>
    </Dialog>
  );
}
