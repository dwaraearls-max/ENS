export const hero = {
  headline: "Save with discipline. Grow with trust.",
  subhead:
    "Earl Noble Savings is your online susu home: open an account, record contributions, and watch your balance grow — all in one secure member portal.",
  primaryCta: "Open my account",
  primaryCtaHelper: "Create your profile — then log every contribution on the site.",
  secondaryCta: "How ENS works",
  trustStats: [
    { label: "Where savings live", value: "On ENS" },
    { label: "Your ledger", value: "Always visible" },
    { label: "Built for Ghana", value: "Mobile web" },
  ],
};

export const whatIsEns = {
  title: "What is Earl Noble Savings?",
  lede:
    "Susu is a trusted way Ghanaians build discipline: small, regular contributions on an agreed rhythm, with accountability to your group or collector.",
  modern:
    "ENS keeps that spirit — and moves the work online: your plan, payments you record, and a running balance you can check anytime in your dashboard.",
  flow: [
    {
      step: "Save",
      text: "Contribute on your rhythm — daily, weekly, or monthly — and log each amount on the site.",
    },
    {
      step: "Track",
      text: "See balance, history, and goals inside your ENS account — no chasing chats for figures.",
    },
    {
      step: "Grow",
      text: "Stay consistent with clear numbers in front of you and gentle in-portal reminders.",
    },
    {
      step: "Withdraw",
      text: "When your cycle completes or your goal is met, follow the withdrawal path set in your agreement.",
    },
  ],
};

export const howItWorks = {
  title: "How ENS works",
  subtitle: "Five simple steps — online first.",
  steps: [
    {
      title: "Register on the site",
      body: "Create your member profile in a few minutes. You choose your product and we explain the rules in plain language before you start.",
    },
    {
      title: "Choose your savings plan",
      body: "Pick daily susu, monthly plan, group vault, SME savings, or a named goal — whatever matches your life.",
    },
    {
      title: "Contribute and log it",
      body: "Whenever you pay in (mobile money, bank, cash at a branch, or group collection), record the amount in your dashboard so your ledger stays true.",
    },
    {
      title: "Track on your dashboard",
      body: "Balance and history update as you save. Everything lives in one place — export or screenshot for your own files anytime.",
    },
    {
      title: "Withdraw or roll over",
      body: "When your cycle ends or your goal is met, withdraw as per your agreement — or roll over and keep growing.",
    },
  ],
};

export type ProductCard = {
  id: string;
  title: string;
  forWhom: string;
  contribution: string;
  benefits: string[];
  cta: string;
};

export const products: ProductCard[] = [
  {
    id: "daily",
    title: "Daily Susu",
    forWhom: "Market women, stall traders, and anyone who earns in small amounts daily.",
    contribution: "Small fixed amounts each market day or working day — logged after each payment.",
    benefits: [
      "Builds the habit without one big lump sum",
      "Matches how many Ghanaians actually earn",
      "Each day’s saving appears on your timeline instantly",
    ],
    cta: "Start daily susu online",
  },
  {
    id: "monthly",
    title: "Monthly contribution plans",
    forWhom: "Salaried workers, civil servants, and employees with a predictable payday.",
    contribution: "Once a month on a date you choose — record your transfer when it lands.",
    benefits: [
      "Aligns with payday — less stress",
      "Good for rent, school fees pots, and backup funds",
      "Projection charts stay in your portal as you go",
    ],
    cta: "Start monthly plan online",
  },
  {
    id: "group",
    title: "Group savings",
    forWhom: "Associations, churches, market groups, and cooperatives.",
    contribution: "Per group agreement — treasurers and members can rely on one shared digital record.",
    benefits: [
      "Shared accountability your community already understands",
      "Fewer disputes when everyone sees the same numbers",
      "Ideal for susu clubs graduating from informal tracking",
    ],
    cta: "Open a group ledger",
  },
  {
    id: "sme",
    title: "SME capital savings",
    forWhom: "Shop owners, service businesses, and growing enterprises.",
    contribution: "Structured instalments toward stock, equipment, or buffer capital — each logged on the site.",
    benefits: [
      "Separates business resilience from daily spending",
      "Builds a capital cushion without fancy jargon",
      "Your SME vault lives beside your personal plans",
    ],
    cta: "Start SME plan online",
  },
  {
    id: "goal",
    title: "Goal-based savings",
    forWhom: "Parents, young professionals, and families saving for something specific.",
    contribution: "Tailored to a deadline: school fees, rent, travel, or a business milestone — progress visible in-app.",
    benefits: [
      "Name your goal so contributions feel purposeful",
      "See how close you are as dates approach",
      "Popular with diaspora supporting family plans back home",
    ],
    cta: "Create a goal online",
  },
];

export const trustSection = {
  title: "Why trust ENS?",
  subtitle:
    "We know savings anxiety is real. Here is how we think about transparency, rules, and accountability in a digital susu.",
  pillars: [
    {
      title: "Transparency policy",
      body: "You deserve to know what plan you are on, how much you have saved, and what fees or deductions apply — if any. That information lives in your account and in documents you can download or print.",
    },
    {
      title: "Record-keeping",
      body: "Every contribution you confirm adds to an on-site ledger with timestamps. You can align those entries with SMS or bank alerts from your own wallet — so nothing depends on memory alone.",
    },
    {
      title: "Withdrawal rules",
      body: "Withdrawals follow the agreement you sign up to — cycle dates, notice where needed, and any group rules your association has agreed. There should be no surprise “fine print” on withdrawal day.",
    },
    {
      title: "Community accountability",
      body: "Groups often already have leaders and treasurers ENS can support — not replace. Named roles, audit trails, and shared dashboards keep everyone aligned.",
    },
    {
      title: "Leadership integrity",
      body: "Our team is expected to treat members with respect, patience, and honesty — especially first-time savers and elders learning the portal.",
    },
    {
      title: "Registration & oversight",
      body: "Formal registration or licensing details for Ghana will be published here once finalized. Until then, ask us directly for documents you can verify, and consult independent advice if you are unsure.",
    },
  ],
};

export const testimonials = {
  title: "Stories from people like you",
  disclaimer:
    "Illustrative stories based on common Ghanaian saver journeys — replace with verified member quotes when available.",
  items: [
    {
      quote:
        "I sell at Makola. I log small daily amounts on my phone after I close — my balance is never a mystery anymore.",
      name: "Adjoa R.",
      role: "Market trader — Accra",
    },
    {
      quote:
        "Our church group wanted one ledger everyone could see. ENS put the treasurer and members on the same screen.",
      name: "Elder Mensah",
      role: "Church savings committee — Kumasi",
    },
    {
      quote:
        "Payday used to finish before I saved. Now my monthly transfer and the entry in the app happen the same day.",
      name: "Kwame T.",
      role: "Salaried professional — Tema",
    },
    {
      quote:
        "I run a fittings shop. We track the equipment fund in the portal — Twi and English on the site helped my staff understand.",
      name: "Ama S.",
      role: "SME owner — Sunyani",
    },
    {
      quote:
        "From London I still fund my mother’s susu circle — I see each contribution she records without asking in chat.",
      name: "Kofi D.",
      role: "Diaspora supporter — UK",
    },
  ],
};

export const toolsSection = {
  title: "Your digital command centre",
  subtitle: "Mobile-first web you can use on any smartphone — savings stay on the platform.",
  items: [
    {
      title: "Member dashboard",
      body: "Balances, goals, and timelines in one place. Add contributions and withdrawals as they happen.",
    },
    {
      title: "Email & SMS alerts (optional)",
      body: "When you switch them on, we ping you for milestones — the full story still lives on ENS, not in scattered threads.",
    },
    {
      title: "Smart reminders",
      body: "Gentle nudges inside the portal when a due date is near — never shame, never pressure.",
    },
    {
      title: "Customer care",
      body: "If you are stuck, our team can coach you through the site or escalate to compliance — humans first.",
    },
    {
      title: "Onboarding help",
      body: "Dedicated sessions for groups, elders, or low-data environments — we train you until the portal feels normal.",
    },
  ],
};

export const faqs = {
  title: "Questions people ask before they save",
  items: [
    {
      q: "Is my money safe?",
      a: "ENS is built around clear rules, online records, and open communication. No platform removes every risk — read your agreement, verify our registration when published, and only commit amounts you understand. Keep your own bank or MoMo receipts alongside what you log here.",
    },
    {
      q: "Can I withdraw anytime?",
      a: "Withdrawal follows the plan you choose. Some products allow payout on a cycle; others may need short notice. Before you join, we explain exactly how and when you can access funds — so there are no surprises.",
    },
    {
      q: "What if I miss a payment?",
      a: "Life happens. Update your notes in the portal and speak with your group lead or our support team early. Depending on your plan, you may catch up, adjust, or pause in line with your agreement.",
    },
    {
      q: "How is ENS different from traditional susu?",
      a: "Traditional susu is about discipline and community — ENS keeps that heart. We add a shared digital ledger, dashboards, and support so you are not hunting through messages to know your balance.",
    },
    {
      q: "What happens if ENS closes?",
      a: "Members should know how wind-down would be communicated and how balances are returned, according to law and your contract. Ask us for our business continuity plan — and export your ledger regularly as your personal backup.",
    },
  ],
};

export const finalCta = {
  title: "Peace of mind starts with a steady habit — tracked where you can see it.",
  sub:
    "Create your ENS account, log each contribution, and watch noble growth add up with clarity.",
  primary: "Create free account",
  secondary: "Log in to my savings",
};

export const footer = {
  blurb:
    "Earl Noble Savings helps Ghanaians save with discipline — online ledgers that honour susu culture.",
  trustLine:
    "We are building savings discipline with clear rules, on-site records, and open communication.",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  socialLabels: {
    facebook: "Facebook",
    linkedin: "LinkedIn",
    x: "X",
  },
};

export const nav = [
  { label: "What is ENS?", href: "#what-is-ens" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
  { label: "Trust", href: "#trust" },
  { label: "Stories", href: "#stories" },
  { label: "Tools", href: "#tools" },
  { label: "FAQ", href: "#faq" },
];
