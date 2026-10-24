import {
  CheckSquare,
  CalendarRange,
  Plug,
  BellOff,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "FlowDesk",
  tagline: "Run your team's work in one calm place.",
  description:
    "FlowDesk is a project management tool for small remote teams. Plan work, track progress, and skip the noise.",
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Now open: early access waitlist",
  headline: "Run your team's work in",
  highlight: "one calm place.",
  subtext:
    "FlowDesk brings tasks, timelines, and updates together, so your remote team spends less time in meetings and more time shipping.",
  cta: "Join the waitlist",
  note: "Free to join. No credit card needed.",
};

export const logos = ["Northwind", "Lumio", "Parcelly", "Atlas&Co", "Brightside"];

export type Feature = { title: string; description: string; icon: LucideIcon };

export const features: Feature[] = [
  {
    title: "Tasks that stay clear",
    description:
      "Break work into simple tasks with owners and due dates, so nobody wonders who is doing what.",
    icon: CheckSquare,
  },
  {
    title: "Timelines at a glance",
    description:
      "See the whole project on one timeline and spot delays before they become problems.",
    icon: CalendarRange,
  },
  {
    title: "Works with your tools",
    description:
      "Connect Slack, GitHub, and Google Calendar in a few clicks. No copy-pasting between apps.",
    icon: Plug,
  },
  {
    title: "Quiet by default",
    description:
      "Smart notifications only ping you when something needs your attention.",
    icon: BellOff,
  },
  {
    title: "Built for remote teams",
    description:
      "Async updates and time zone aware deadlines keep everyone in sync without extra calls.",
    icon: Users,
  },
  {
    title: "Progress you can share",
    description:
      "Send clients and managers a clean progress report with one link.",
    icon: BarChart3,
  },
];

export const steps = [
  {
    title: "Create your workspace",
    description: "Sign up and invite your team in under two minutes.",
  },
  {
    title: "Add your projects",
    description: "Import tasks from a spreadsheet or start fresh with a template.",
  },
  {
    title: "Ship with less noise",
    description: "Follow progress on one board and let FlowDesk handle the reminders.",
  },
];

export type Plan = {
  name: string;
  description: string;
  monthly: number;
  yearly: number; // price per user per month, billed yearly
  popular: boolean;
  cta: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Free",
    description: "For individuals and tiny teams getting started.",
    monthly: 0,
    yearly: 0,
    popular: false,
    cta: "Join the waitlist",
    features: ["Up to 3 projects", "Up to 5 team members", "Basic timeline view", "Community support"],
  },
  {
    name: "Pro",
    description: "For growing teams that need more control.",
    monthly: 12,
    yearly: 10,
    popular: true,
    cta: "Join the waitlist",
    features: [
      "Unlimited projects",
      "Unlimited team members",
      "Advanced timelines",
      "Integrations (Slack, GitHub)",
      "Priority email support",
    ],
  },
  {
    name: "Team",
    description: "For companies that need reporting and security.",
    monthly: 24,
    yearly: 20,
    popular: false,
    cta: "Join the waitlist",
    features: [
      "Everything in Pro",
      "Client progress reports",
      "Roles and permissions",
      "Single sign-on (SSO)",
      "Dedicated support",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "We cut our weekly status meeting from an hour to ten minutes. Everyone just reads the board.",
    name: "Maya Fernando",
    role: "Product Lead, Lumio",
  },
  {
    quote:
      "The timeline view showed us a delay two weeks early. That alone paid for the tool.",
    name: "Daniel Okafor",
    role: "Engineering Manager, Northwind",
  },
  {
    quote:
      "Finally a project tool that doesn't buzz at me all day. It is calm, like it says.",
    name: "Priya Nair",
    role: "Founder, Parcelly",
  },
];

export const faqs = [
  {
    question: "When will FlowDesk launch?",
    answer:
      "We are opening early access in small batches. Join the waitlist and we will email you when your spot is ready.",
  },
  {
    question: "Is the Free plan really free?",
    answer:
      "Yes. The Free plan has no time limit and does not need a credit card.",
  },
  {
    question: "Can I import my existing tasks?",
    answer:
      "You will be able to import tasks from CSV files, with direct imports from popular tools coming after launch.",
  },
  {
    question: "Does FlowDesk work across time zones?",
    answer:
      "Yes. Deadlines and reminders are shown in each teammate's local time.",
  },
  {
    question: "How does yearly billing work?",
    answer:
      "Yearly plans are billed once a year and save you about 17% compared with paying monthly.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is encrypted in transit and at rest. The Team plan adds roles, permissions, and single sign-on.",
  },
];
