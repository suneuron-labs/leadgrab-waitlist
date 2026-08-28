import { WAITLIST_SOURCES } from "@/lib/validators";

export const copy = {
  meta: {
    title: "WA LeadGrab — Export WhatsApp Contacts to Excel",
    description:
      "1-click Chrome extension to export WhatsApp groups and contacts to clean Excel/CSV files with proper country codes and zero scientific notation errors.",
  },

  nav: {
    logo: "WA LeadGrab",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Join Early Beta",
  },

  hero: {
    pill: "Built for Sales Reps, Recruiters & Community Managers",
    headline: "Export WhatsApp Groups & Contacts to Clean Excel in 1 Click",
    headlineAccent: "Clean Excel",
    subheading:
      "Stop copying phone numbers one by one. Grab group members, unsaved numbers, and business chats with pristine formatting, proper country codes, and zero scientific notation errors.",
    cta: "Join Early Beta",
    trustSubtext:
      "⭐ Free 50-contact trial • 100% In-Browser Privacy • Zero Setup Required",
    mockup: {
      contactsDetected: "428 contacts detected",
      exportButton: "Export to Excel",
    },
  },

  whyUs: {
    sectionTitle: "Why WA LeadGrab",
    sectionSubtitle:
      "Built to fix the pain points that break every other WhatsApp export tool.",
    cards: [
      {
        title: "No More Scrambled Numbers",
        description:
          "Auto country-code formatting keeps every number export-ready — no Excel scientific notation bugs like",
        codeCallout: "+6.5912E+11",
      },
      {
        title: "Selective Pre-Export Filtering",
        description:
          "1-click admin exclusion and custom member checkmarks so you only export the contacts you actually need.",
      },
      {
        title: "Zero-Break Guarantee",
        description:
          "We guarantee hotfixes within 24 hours of WhatsApp Web UI updates — so your exports never break mid-campaign.",
      },
    ],
  },

  showcase: {
    pill: "3-STEP WORKFLOW",
    sectionTitle: "How It Works",
    sectionSubtitle:
      "1. Open group → 2. Preview & filter members → 3. Export CRM-ready sheet.",
    rawDump: {
      title: "Raw contact dump",
      rows: [
        { name: "john", phone: "6591234567" },
        { name: "sarah", phone: "+6.5912E+11" },
        { name: "mike", phone: "447911123456" },
      ],
    },
    organized: {
      title: "WA LeadGrab export",
      columns: ["Name", "Clean Phone", "Country Code", "Role"],
      rows: [
        {
          name: "John Tan",
          phone: "9123 4567",
          countryCode: "+65",
          role: "Member",
        },
        {
          name: "Sarah Lee",
          phone: "9123 4568",
          countryCode: "+65",
          role: "Admin",
        },
        {
          name: "Mike Smith",
          phone: "7911 123456",
          countryCode: "+44",
          role: "Member",
        },
      ],
    },
  },

  pricing: {
    sectionTitle: "Transparent Pricing",
    sectionSubtitle:
      "Start free with 50 lifetime exports. Upgrade when you need unlimited access and advanced filtering.",
    riskReversal: "No credit card required for the free trial.",
    tiers: [
      {
        name: "Free Trial",
        price: "$0",
        period: "",
        badge: null,
        features: [
          "First 50 contacts lifetime",
          "Standard CSV export",
          "Clean Country-Code Formatting",
        ],
        cta: "Join Early Beta",
        highlighted: false,
        waitlistSource: WAITLIST_SOURCES.freeTrial,
      },
      {
        name: "Pro Monthly",
        price: "$12",
        period: "/mo",
        badge: "Most Popular",
        features: [
          "Unlimited exports",
          "Selective checkmarks",
          "Admin exclusion",
          "Excel (.xlsx) & vCard support",
          "Priority hotfixes",
        ],
        cta: "Join Early Beta",
        highlighted: true,
        waitlistSource: WAITLIST_SOURCES.proMonthly,
      },
      {
        name: "Pro Annual",
        price: "$89",
        period: "/yr",
        badge: "38% annual discount",
        features: [
          "Everything in Pro Monthly",
          "2 Months Free (Save 38%)",
          "Lifetime Price Lock Guarantee",
          "Dedicated 1-on-1 Support",
        ],
        cta: "Join Early Beta",
        highlighted: false,
        waitlistSource: WAITLIST_SOURCES.proAnnual,
      },
    ],
  },

  modal: {
    title: "Join the Next WA LeadGrab Batch",
    description:
      "We are onboarding users in batches of 50 to maintain stability with recent WhatsApp Web releases. Enter your email to receive your access link and Chrome Store invite.",
    emailPlaceholder: "Your email",
    submitButton: "Join Early Beta",
    successMessage:
      "You're on the list! Check your inbox for a confirmation email.",
    errorMessage: "Something went wrong. Please try again.",
    confirmationEmail: {
      subject: "You're on the early access list for WA LeadGrab",
      text: () =>
        [
          "Hi there,",
          "",
          "Thanks for signing up for early access to WA LeadGrab.",
          "",
          "We're currently putting the final touches on v1.0 and fixing the common bugs that plague other exporters (especially Excel scientific notation errors and broken selector updates).",
          "",
          "We plan to roll out access to the first 50 testers within the next 7 days. You'll get a free lifetime discount code alongside your invite.",
          "",
          "Quick question while we finalize the build: What is the #1 thing that frustrates you most about your current WhatsApp export process? (Just reply directly to this email—I read every response).",
          "",
          "Best,",
          "",
          "Sunil",
          "Founder, WA LeadGrab",
        ].join("\n"),
      html: () =>
        `
        <div style="font-family: sans-serif; line-height: 1.6; color: #0f172a; max-width: 560px;">
          <p>Hi there,</p>
          <p>Thanks for signing up for early access to WA LeadGrab.</p>
          <p>We're currently putting the final touches on v1.0 and fixing the common bugs that plague other exporters (especially Excel scientific notation errors and broken selector updates).</p>
          <p>We plan to roll out access to the first 50 testers within the next 7 days. You'll get a free lifetime discount code alongside your invite.</p>
          <p>Quick question while we finalize the build: What is the #1 thing that frustrates you most about your current WhatsApp export process? (Just reply directly to this email—I read every response).</p>
          <p>Best,</p>
          <p>
            Sunil<br />
            Founder, WA LeadGrab
          </p>
        </div>
      `.trim(),
    },
  },

  faq: {
    pill: "GOT QUESTIONS?",
    sectionTitle: "FAQ",
    sectionSubtitle:
      "Common questions about the private beta and how WA LeadGrab works.",
    items: [
      {
        question: "Will using this get my WhatsApp account banned?",
        answer:
          "No. WA LeadGrab only reads visible text directly from your open WhatsApp Web tab using standard browser DOM APIs. It never sends automated messages, spams contacts, or interacts with WhatsApp's unofficial API.",
      },
      {
        question: "Is WA LeadGrab free to try?",
        answer:
          "Yes. Every account gets 50 lifetime export credits free — enough to validate the tool on a real group before upgrading.",
      },
      {
        question: "Does it store my WhatsApp data?",
        answer:
          "No. All extraction happens in your browser on WhatsApp Web. Nothing is sent to our servers during export.",
      },
      {
        question: "When will it be on the Chrome Web Store?",
        answer:
          "We're rolling out in private batches of 50 users. Join the waitlist to receive your Chrome Store invite in the next batch.",
      },
      {
        question: "What happens if WhatsApp Web updates?",
        answer:
          "We ship selector hotfixes within 24 hours of major WhatsApp Web UI changes so Pro users stay unblocked.",
      },
    ],
  },

  closingCta: {
    headline: "Ready to stop copy-pasting numbers manually?",
    subheadline:
      "Join the private beta. First 50 export credits are completely free.",
    cta: "Join Early Beta",
  },

  footer: {
    product: "WA LeadGrab",
    tagline: "Clean WhatsApp exports for sales teams.",
    copyright:
      "© 2026 Suneuron Pte. Ltd. All rights reserved. WA LeadGrab is an independent tool and is not affiliated with, endorsed by, or sponsored by WhatsApp LLC or Meta Platforms, Inc.",
  },
} as const;
