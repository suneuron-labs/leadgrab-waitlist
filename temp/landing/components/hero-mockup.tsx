import { Check, Download, FileSpreadsheet, Search } from "lucide-react";
import { copy } from "@/lib/copy";

const chatPreview = [
  { name: "Sarah Chen", preview: "Thanks, see you tomorrow", active: false },
  { name: "Sales Team Q4", preview: "428 members", active: true },
  { name: "Mike Johnson", preview: "Can you send the list?", active: false },
];

const contactPreview = [
  { name: "Sarah Chen", phone: "+65 9123 4567", checked: true },
  { name: "Mike Johnson", phone: "+65 8765 4321", checked: true },
  { name: "Lisa Wong", phone: "+65 8111 2233", checked: false },
  { name: "David Tan", phone: "+65 9000 1122", checked: true },
];

export function HeroMockup() {
  const { mockup } = copy.hero;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Glow behind mockup */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/40">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="truncate text-xs text-slate-500">
              web.whatsapp.com
            </span>
          </div>
        </div>

        <div className="relative flex min-h-[320px] sm:min-h-[360px]">
          {/* WhatsApp sidebar */}
          <div className="hidden w-[38%] border-r border-slate-800 bg-slate-950/60 sm:block">
            <div className="border-b border-slate-800 p-3">
              <div className="flex items-center gap-2 rounded-lg bg-slate-900 px-2.5 py-1.5">
                <Search className="size-3.5 text-slate-500" />
                <span className="text-xs text-slate-500">Search chats</span>
              </div>
            </div>
            <div className="p-1.5">
              {chatPreview.map((chat) => (
                <div
                  key={chat.name}
                  className={`rounded-lg px-2.5 py-2 ${
                    chat.active ? "bg-emerald-500/10" : "hover:bg-slate-900/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-8 shrink-0 rounded-full ${
                        chat.active ? "bg-emerald-500/30" : "bg-slate-800"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-xs font-medium ${
                          chat.active ? "text-emerald-400" : "text-slate-300"
                        }`}
                      >
                        {chat.name}
                      </p>
                      <p className="truncate text-[10px] text-slate-500">
                        {chat.preview}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="relative flex flex-1 flex-col bg-[#0b141a]">
            <div className="flex items-center gap-3 border-b border-slate-800/80 px-4 py-3">
              <div className="size-8 rounded-full bg-emerald-500/25" />
              <div>
                <p className="text-sm font-medium text-slate-200">
                  Sales Team Q4
                </p>
                <p className="text-[10px] text-slate-500">
                  Group · 428 members
                </p>
              </div>
            </div>

            <div className="flex flex-1 items-end p-4">
              <div className="max-w-[80%] rounded-lg rounded-tl-none bg-slate-800/80 px-3 py-2">
                <p className="text-xs text-slate-300">
                  Can someone export the member list for the CRM?
                </p>
                <p className="mt-1 text-[10px] text-slate-500">10:42 AM</p>
              </div>
            </div>

            {/* Extension drawer overlay */}
            <div className="absolute inset-y-3 right-3 z-10 flex w-[58%] max-w-[220px] flex-col overflow-hidden rounded-xl border border-emerald-500/30 bg-slate-950/95 shadow-xl shadow-emerald-500/10 backdrop-blur-sm sm:w-[52%] sm:max-w-[240px]">
              <div className="border-b border-slate-800 bg-emerald-500/10 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="size-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400">
                    WA LeadGrab
                  </span>
                </div>
                <p className="mt-1 text-[11px] font-medium text-slate-200">
                  {mockup.contactsDetected}
                </p>
              </div>

              <div className="flex-1 space-y-1.5 overflow-hidden p-2">
                {contactPreview.map((contact) => (
                  <div
                    key={contact.name}
                    className="flex items-center gap-2 rounded-lg bg-slate-900/80 px-2 py-1.5"
                  >
                    <div
                      className={`flex size-4 shrink-0 items-center justify-center rounded border ${
                        contact.checked
                          ? "border-emerald-500 bg-emerald-500"
                          : "border-slate-600 bg-transparent"
                      }`}
                    >
                      {contact.checked ? (
                        <Check className="size-2.5 text-black" strokeWidth={3} />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] font-medium text-slate-200">
                        {contact.name}
                      </p>
                      <p className="truncate text-[9px] text-slate-500">
                        {contact.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 p-2.5">
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-500 py-2 text-[11px] font-semibold text-black"
                >
                  <Download className="size-3.5" />
                  {mockup.exportButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
