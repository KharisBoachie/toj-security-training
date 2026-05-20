import {
  BookOpenCheck,
  BriefcaseBusiness,
  Camera,
  GraduationCap,
  Languages,
  Shield,
  ShieldCheck,
  ShieldPlus,
  Stethoscope,
  UserCheck,
} from "lucide-react";

export const trustIndicators = [
  "Practical training aligned to security licensing expectations",
  "English preparation pathways at A1, A2, and B1 levels",
  "Professional short courses for workplace safety and compliance",
] as const;

export const trustBandCards = [
  {
    title: "Compliance-led delivery",
    description:
      "Training content is aligned to professional standards and practical role expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Practical instructor guidance",
    description:
      "Learners receive clear support from instructors focused on real-world application, not theory-only delivery.",
    icon: UserCheck,
  },
  {
    title: "Clear learning pathways",
    description:
      "From entry-level security routes to top-up and workplace modules, progression stays structured and understandable.",
    icon: BookOpenCheck,
  },
] as const;

export const pathwayGroups = [
  {
    title: "Security Licensing",
    description:
      "Professional routes for learners preparing for licensed security responsibilities.",
    href: "/courses",
    icon: Shield,
    items: [
      "Door Supervisor",
      "CCTV Training",
      "Security Top-Up",
    ],
  },
  {
    title: "English Preparation",
    description:
      "Structured language support for communication, confidence, and progression goals.",
    href: "/courses/english-a1-a2-b1",
    icon: Languages,
    items: [
      "A1 English Preparation",
      "A2 English Preparation",
      "B1 English Preparation",
    ],
  },
  {
    title: "Workplace Short Courses",
    description:
      "Targeted modules for workplace safety, compliance awareness, and practical readiness.",
    href: "/courses/short-courses",
    icon: BriefcaseBusiness,
    items: [
      "First Aid",
      "Safeguarding",
      "Traffic Marshal",
      "Manual Handling",
      "Health & Safety",
      "Fire Safety",
      "Care Certificate",
    ],
  },
] as const;

export const aboutCredibilityRows = [
  {
    title: "Structured training pathways",
    description:
      "Clear routes from foundational learning to advanced role readiness.",
  },
  {
    title: "Practical learner support",
    description:
      "Guidance focused on confidence, application, and measurable progression.",
  },
  {
    title: "Suitable for individuals and employer teams",
    description:
      "Delivery formats support both single learners and workforce upskilling plans.",
  },
] as const;

export const featuredCourseGroups = [
  {
    title: "Main Security Courses",
    description:
      "Core pathways for learners starting or renewing their security career route.",
    icon: ShieldCheck,
    courses: [
      { label: "Door Supervisor", href: "/courses/door-supervisor" },
      { label: "CCTV Training", href: "/courses/cctv" },
      { label: "Security Top-Up", href: "/courses/security-top-up" },
    ],
  },
  {
    title: "Language Preparation",
    description:
      "English support designed to improve communication for training and workplace settings.",
    icon: GraduationCap,
    courses: [
      { label: "A1 English Preparation", href: "/courses/english-a1-a2-b1" },
      { label: "A2 English Preparation", href: "/courses/english-a1-a2-b1" },
      { label: "B1 English Preparation", href: "/courses/english-a1-a2-b1" },
    ],
  },
  {
    title: "Professional Short Courses",
    description:
      "Focused training modules that strengthen workplace readiness and regulatory awareness.",
    icon: BriefcaseBusiness,
    courses: [
      { label: "First Aid", href: "/courses/first-aid" },
      { label: "Safeguarding", href: "/courses/short-courses" },
      { label: "Traffic Marshal", href: "/courses/short-courses" },
      { label: "Manual Handling", href: "/courses/short-courses" },
      { label: "Health & Safety", href: "/courses/short-courses" },
      { label: "Fire Safety", href: "/courses/short-courses" },
      { label: "Care Certificate", href: "/courses/short-courses" },
    ],
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
    icon: Stethoscope,
  },
] as const;

export const securityCourseHighlights = [
  {
    title: "Door Supervisor",
    description:
      "Comprehensive preparation for front-line security roles, including conflict handling and safe intervention practice.",
    icon: ShieldCheck,
    href: "/courses/door-supervisor",
  },
  {
    title: "CCTV Training",
    description:
      "Operational and legal fundamentals for effective surveillance practice and professional reporting.",
    icon: Camera,
    href: "/courses/cctv",
  },
  {
    title: "Security Top-Up",
    description:
      "Updated learning route for existing licence holders to meet current professional standards.",
    icon: ShieldPlus,
    href: "/courses/security-top-up",
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
