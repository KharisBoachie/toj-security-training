import {
  BookOpenCheck,
  Camera,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  ShieldPlus,
  TrafficCone,
  UserCheck,
} from "lucide-react";

export const trustIndicators = [
  "SIA-focused training pathways",
  "Experienced, industry-active tutors",
  "Small cohort and employer-friendly options",
  "Clear progression from entry to top-up",
] as const;

export const courseCategories = [
  {
    title: "Door Supervisor",
    description:
      "Core SIA pathway covering conflict management, physical intervention, and practical site readiness.",
    icon: ShieldCheck,
  },
  {
    title: "CCTV Training",
    description:
      "Professional surveillance operations, legal compliance, incident reporting, and control room communication.",
    icon: Camera,
  },
  {
    title: "Security Top-Up",
    description:
      "Updated requirements for existing licence holders, including refreshed safety and intervention standards.",
    icon: ShieldPlus,
  },
  {
    title: "English Courses",
    description:
      "A1, A2, and B1 preparation designed to strengthen workplace communication and confidence.",
    icon: GraduationCap,
  },
  {
    title: "First Aid",
    description:
      "Workplace-first aid fundamentals with practical response techniques and compliant certification support.",
    icon: HeartPulse,
  },
  {
    title: "Short Courses",
    description:
      "Targeted modules including safeguarding, fire safety, traffic marshal, manual handling, and more.",
    icon: BookOpenCheck,
  },
] as const;

export const valueProps = [
  {
    title: "Career-Focused Outcomes",
    description:
      "Training is aligned to real job requirements so learners leave prepared for the workplace, not just assessment day.",
    icon: UserCheck,
  },
  {
    title: "Professional Learning Environment",
    description:
      "Clear instruction, practical guidance, and structured support create a focused experience for individuals and teams.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Delivery",
    description:
      "Weekday and selected weekend schedules help learners and employers complete training with minimal disruption.",
    icon: TrafficCone,
  },
] as const;

export const processSteps = [
  {
    title: "Choose Your Course",
    description:
      "Select the pathway that matches your current role, licence stage, or development goal.",
  },
  {
    title: "Book and Prepare",
    description:
      "Receive clear joining guidance, course expectations, and practical preparation notes ahead of start date.",
  },
  {
    title: "Train with Experts",
    description:
      "Attend focused sessions led by experienced instructors with real security and compliance knowledge.",
  },
  {
    title: "Progress with Confidence",
    description:
      "Complete assessments, gain recognised outcomes, and move forward into work or next-level training.",
  },
] as const;

export const faqs = [
  {
    question: "Which SIA-related courses do you provide?",
    answer:
      "TOJ Security Training offers Door Supervisor, CCTV, and Security Top-Up pathways, alongside supporting professional and compliance-focused courses.",
  },
  {
    question: "Do you provide English language preparation courses?",
    answer:
      "Yes. We run structured A1, A2, and B1 English preparation designed for practical communication in study and workplace environments.",
  },
  {
    question: "Can employers book training for teams?",
    answer:
      "Yes. We support employer and group bookings and can help plan suitable delivery options based on team size and timelines.",
  },
  {
    question: "What additional short courses are available?",
    answer:
      "We provide short professional options including First Aid, Safeguarding, Traffic Marshal, Manual Handling, Health & Safety, Fire Safety, and Care Certificate training.",
  },
  {
    question: "How do I speak with your team before booking?",
    answer:
      "Use the contact options on this page to discuss your goals, compare course routes, and confirm the right next step before enrolment.",
  },
] as const;
