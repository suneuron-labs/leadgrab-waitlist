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
    cta: "Get Early Access",
  },

  hero: {
    pill: "Built for Sales Reps, Recruiters & Community Managers",
    headline: "Export WhatsApp Groups & Contacts to Clean Excel in 1 Click",
    headlineAccent: "Clean Excel",
    subheading:
      "Stop copying phone numbers one by one. Grab group members, unsaved numbers, and business chats with pristine formatting, proper country codes, and zero scientific notation errors.",
    cta: "Add to Chrome — Free Beta",
    trustSubtext:
      "⭐ Free 50-contact trial • In-browser privacy (no data stored) • Manifest V3 safe",
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
          "Auto country-code formatting keeps every number export-ready — no Excel scientific notation bugs like +6.5912E+11.",
      },
      {
        title: "Selective Pre-Export Filtering",
        description:
          "1-click admin exclusion and custom member checkmarks so you only export the contacts you actually need.",
      },
      {
        title: "Always Up-to-Date",
        description:
          "We commit to hotfixes within 24 hours of WhatsApp Web UI updates so your exports never break mid-campaign.",
      },
    ],
  },

  showcase: {
    sectionTitle: "See the Difference",
    sectionSubtitle:
      "Compare a typical copy-paste export against a WA LeadGrab sheet — formatted, split, and ready for CRM import.",
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
          "Basic formatting",
        ],
        cta: "Get Access",
        highlighted: false,
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
        cta: "Get Access",
        highlighted: true,
      },
      {
        name: "Pro Annual",
        price: "$89",
        period: "/yr",
        badge: "38% annual discount",
        features: ["Everything in Pro"],
        cta: "Get Access",
        highlighted: false,
      },
    ],
  },

  modal: {
    title: "Join the Next WA LeadGrab Batch",
    description:
      "We are onboarding users in batches of 50 to maintain stability with recent WhatsApp Web releases. Enter your email to receive your access link and Chrome Store invite.",
    emailPlaceholder: "Work email",
    submitButton: "Request Beta Invite",
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
    sectionTitle: "FAQ",
    sectionSubtitle:
      "Common questions about the private beta and how WA LeadGrab works.",
    items: [
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

  footer: {
    product: "WA LeadGrab",
    tagline: "Clean WhatsApp exports for sales teams.",
    copyright: "© Suneuron Pte. Ltd. All rights reserved 2026",
  },
} as const;
