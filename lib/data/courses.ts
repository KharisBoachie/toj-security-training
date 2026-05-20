export type CourseFaq = {
  question: string;
  answer: string;
};

export type CourseCategoryName =
  | "SIA Security Courses"
  | "English Preparation"
  | "Professional Short Courses";

export type CourseOption = {
  id: string;
  title: string;
  category: CourseCategoryName;
  summary: string;
  suitableFor: string;
  detailHref?: string;
};

export type CourseCategory = {
  id: string;
  title: CourseCategoryName;
  description: string;
  courses: CourseOption[];
};

export type CourseRegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  postcode: string;
  selectedCourse: string;
  preferredStart:
    | "As soon as possible"
    | "Within 1 month"
    | "Within 3 months"
    | "Not sure yet";
  applyingAs: "Individual learner" | "Employer / organisation" | "Referrer / sponsor";
  siaLicenceStatus: "Yes" | "No" | "In progress" | "Not applicable";
  englishPreparationNeed: "Yes" | "No" | "Not sure";
  accessibilitySupport: "Yes" | "No" | "Prefer to discuss";
  notes: string;
  consentContact: boolean;
  consentAccuracy: boolean;
};

export type CourseDetail = {
  slug: string;
  title: string;
  group: CourseCategoryName;
  summary: string;
  heroDescription: string;
  whoFor: string[];
  learn: string[];
  outcomes: string[];
  faqs: CourseFaq[];
};

export const courseDetails: CourseDetail[] = [
  {
    slug: "door-supervisor",
    title: "Door Supervisor",
    group: "SIA Security Courses",
    summary:
      "Comprehensive preparation for front-line security roles, including conflict management and safe intervention practice.",
    heroDescription:
      "A practical route for learners preparing for professional door supervision responsibilities in real operational settings.",
    whoFor: [
      "Individuals starting a career in security and front-line guarding",
      "Learners who need a structured pathway aligned with SIA expectations",
      "Employers onboarding team members into site-based security roles",
    ],
    learn: [
      "Core principles of public safety, communication, and incident awareness",
      "Conflict management techniques and de-escalation approaches",
      "Physical intervention awareness in line with professional standards",
      "Professional conduct and reporting expectations in active environments",
    ],
    outcomes: [
      "Stronger readiness for door supervision and related site duties",
      "Greater confidence in handling challenging situations professionally",
      "Clear progression into broader security opportunities",
    ],
    faqs: [
      {
        question: "Is this suitable for first-time learners?",
        answer:
          "Yes. The course is structured to support new entrants while maintaining professional standards expected in the industry.",
      },
      {
        question: "Does the course include practical learning elements?",
        answer:
          "Yes. Delivery is practical and scenario-led, helping learners apply knowledge in realistic workplace contexts.",
      },
    ],
  },
  {
    slug: "cctv",
    title: "CCTV Training",
    group: "SIA Security Courses",
    summary:
      "Professional training in surveillance operations, legal awareness, incident handling, and control room communication.",
    heroDescription:
      "A focused course for learners who need a reliable foundation in CCTV responsibilities and professional monitoring practice.",
    whoFor: [
      "Learners preparing for CCTV-related security roles",
      "Existing staff moving into monitoring and reporting responsibilities",
      "Employers developing internal compliance and control room capability",
    ],
    learn: [
      "Core surveillance principles and responsibilities in operational settings",
      "Legal and ethical awareness relevant to monitoring activity",
      "Incident recording and communication standards for accurate escalation",
      "Best-practice observation and control room workflow fundamentals",
    ],
    outcomes: [
      "Improved confidence in professional CCTV operations",
      "Stronger reporting quality and incident communication skills",
      "Readiness for CCTV-focused workplace responsibilities",
    ],
    faqs: [
      {
        question: "Do I need prior CCTV experience?",
        answer:
          "No prior experience is required. The course is designed to build capability from foundational principles.",
      },
      {
        question: "Is compliance covered as part of the training?",
        answer:
          "Yes. Compliance awareness is integrated throughout the course to support professional and responsible practice.",
      },
    ],
  },
  {
    slug: "security-top-up",
    title: "Security Top-Up",
    group: "SIA Security Courses",
    summary:
      "Updated learning for current licence holders who need to meet newer professional standards and expectations.",
    heroDescription:
      "A structured top-up route that helps existing security professionals stay aligned with current compliance requirements.",
    whoFor: [
      "Current licence holders completing updated training expectations",
      "Professionals returning to active security duties after a gap",
      "Employers supporting compliant upskilling for existing teams",
    ],
    learn: [
      "Updated operational standards relevant to current licence requirements",
      "Refreshed conflict management and risk-awareness practice",
      "Communication and reporting expectations in modern security settings",
      "Safer and more consistent approaches to professional conduct",
    ],
    outcomes: [
      "Clearer alignment with updated security training requirements",
      "Refreshed practical confidence for active site responsibilities",
      "Improved professional consistency in day-to-day operations",
    ],
    faqs: [
      {
        question: "Is this different from entry-level security courses?",
        answer:
          "Yes. Top-up learning is designed for existing licence holders and focuses on updates rather than full initial training.",
      },
      {
        question: "Can employers arrange top-up training for teams?",
        answer:
          "Yes. Group options can be discussed for organisations needing aligned team upskilling.",
      },
    ],
  },
  {
    slug: "english-a1-a2-b1",
    title: "English A1, A2, B1 Preparation",
    group: "English Preparation",
    summary:
      "Practical English preparation designed to support clearer communication in training, assessments, and workplace environments.",
    heroDescription:
      "A supportive language pathway for learners building confidence in everyday and professional communication.",
    whoFor: [
      "Learners preparing for A1, A2, or B1 language assessment goals",
      "Individuals seeking stronger workplace communication skills",
      "Candidates combining language preparation with professional training",
    ],
    learn: [
      "Listening, speaking, reading, and writing support at level-appropriate stages",
      "Confidence building for practical communication scenarios",
      "Clearer use of language in training and workplace contexts",
      "Guided preparation strategies aligned with assessment expectations",
    ],
    outcomes: [
      "Improved confidence when communicating in English",
      "Better readiness for progression in training and employment routes",
      "Stronger language foundations for ongoing development",
    ],
    faqs: [
      {
        question: "Do you support all three levels in one pathway?",
        answer:
          "Yes. Support can be aligned to A1, A2, or B1 depending on the learner's current stage and goals.",
      },
      {
        question: "Is this only for security learners?",
        answer:
          "No. The language preparation is suitable for wider professional and personal development goals.",
      },
    ],
  },
  {
    slug: "first-aid",
    title: "First Aid Training",
    group: "Professional Short Courses",
    summary:
      "Practical first aid learning that helps learners respond effectively and confidently in workplace situations.",
    heroDescription:
      "A practical short course focused on essential first aid awareness and response capability.",
    whoFor: [
      "Individuals and teams needing workplace first aid awareness",
      "Security professionals strengthening on-site response readiness",
      "Employers improving staff confidence in emergency situations",
    ],
    learn: [
      "Core first aid response principles for common workplace incidents",
      "Immediate action techniques and escalation awareness",
      "Clearer communication during emergency situations",
      "Practical confidence in supporting safer environments",
    ],
    outcomes: [
      "More confident first response awareness in the workplace",
      "Improved safety culture across teams and roles",
      "Practical capability aligned with professional expectations",
    ],
    faqs: [
      {
        question: "Is first aid relevant for security roles?",
        answer:
          "Yes. First aid awareness is highly valuable in many security and public-facing environments.",
      },
      {
        question: "Can this be booked alongside security training?",
        answer:
          "Yes. Many learners combine first aid with broader development pathways.",
      },
    ],
  },
  {
    slug: "short-courses",
    title: "Professional Short Courses",
    group: "Professional Short Courses",
    summary:
      "Focused modules including safeguarding, traffic marshal, manual handling, health and safety, fire safety, and care certificate topics.",
    heroDescription:
      "Short, practical courses that support safer workplaces and stronger day-to-day professional standards.",
    whoFor: [
      "Individuals needing specific compliance-focused training updates",
      "Employers strengthening operational readiness across teams",
      "Learners adding targeted modules to a broader training pathway",
    ],
    learn: [
      "Practical safeguarding and duty-of-care awareness",
      "Workplace risk handling through safety-focused modules",
      "Clearer compliance practices in real operational environments",
      "Role-specific knowledge for immediate professional application",
    ],
    outcomes: [
      "Stronger workplace compliance and awareness across teams",
      "Improved confidence in role-specific safety responsibilities",
      "Flexible progression through targeted professional modules",
    ],
    faqs: [
      {
        question: "Which modules are included in short courses?",
        answer:
          "Short course options include safeguarding, traffic marshal, manual handling, health and safety, fire safety, and care certificate-focused training.",
      },
      {
        question: "Can organisations request a tailored short-course mix?",
        answer:
          "Yes. Team-focused planning can be discussed based on business priorities and staff roles.",
      },
    ],
  },
];

export const groupedCourseSummaries = {
  "SIA Security Courses": courseDetails.filter(
    (course) => course.group === "SIA Security Courses",
  ),
  "English Preparation": courseDetails.filter(
    (course) => course.group === "English Preparation",
  ),
  "Professional Short Courses": courseDetails.filter(
    (course) => course.group === "Professional Short Courses",
  ),
} as const;

export const courseRegistrationCategories: CourseCategory[] = [
  {
    id: "sia-security-courses",
    title: "SIA Security Courses",
    description:
      "Licensing-focused pathways for learners preparing for front-line and monitoring responsibilities.",
    courses: [
      {
        id: "door-supervisor",
        title: "Door Supervisor",
        category: "SIA Security Courses",
        summary:
          "Comprehensive preparation for front-line security roles, including conflict management and safe intervention practice.",
        suitableFor:
          "Suitable for learners starting security roles and teams onboarding operational staff.",
        detailHref: "/courses/door-supervisor",
      },
      {
        id: "cctv",
        title: "CCTV Training",
        category: "SIA Security Courses",
        summary:
          "Professional training in surveillance operations, legal awareness, incident handling, and control room communication.",
        suitableFor:
          "Suitable for candidates moving into CCTV monitoring and control room support roles.",
        detailHref: "/courses/cctv",
      },
      {
        id: "security-top-up",
        title: "Security Top-Up",
        category: "SIA Security Courses",
        summary:
          "Updated learning for current licence holders who need to meet newer professional standards and expectations.",
        suitableFor:
          "Suitable for existing licence holders completing required updates.",
        detailHref: "/courses/security-top-up",
      },
    ],
  },
  {
    id: "english-preparation",
    title: "English Preparation",
    description:
      "Structured communication support for learners preparing for workplace and progression requirements.",
    courses: [
      {
        id: "english-a1-preparation",
        title: "A1 English Preparation",
        category: "English Preparation",
        summary:
          "Foundational language support focused on everyday communication and confidence building.",
        suitableFor:
          "Suitable for learners at an early stage of English communication development.",
        detailHref: "/courses/english-a1-a2-b1",
      },
      {
        id: "english-a2-preparation",
        title: "A2 English Preparation",
        category: "English Preparation",
        summary:
          "Progressive language preparation to strengthen practical speaking, reading, and listening use.",
        suitableFor:
          "Suitable for learners ready to build toward broader workplace communication.",
        detailHref: "/courses/english-a1-a2-b1",
      },
      {
        id: "english-b1-preparation",
        title: "B1 English Preparation",
        category: "English Preparation",
        summary:
          "Advanced preparation for learners developing stronger day-to-day and professional language fluency.",
        suitableFor:
          "Suitable for learners targeting progression in training or employment settings.",
        detailHref: "/courses/english-a1-a2-b1",
      },
    ],
  },
  {
    id: "professional-short-courses",
    title: "Professional Short Courses",
    description:
      "Targeted modules for safety awareness, compliance practice, and workplace readiness.",
    courses: [
      {
        id: "first-aid-training",
        title: "First Aid Training",
        category: "Professional Short Courses",
        summary:
          "Practical first aid learning that helps learners respond effectively and confidently in workplace situations.",
        suitableFor:
          "Suitable for individual learners and teams improving emergency readiness.",
        detailHref: "/courses/first-aid",
      },
      {
        id: "safeguarding",
        title: "Safeguarding",
        category: "Professional Short Courses",
        summary:
          "Focused safeguarding awareness for safer decision-making and professional duty-of-care practice.",
        suitableFor:
          "Suitable for staff and learners with safeguarding-related responsibilities.",
        detailHref: "/courses/short-courses",
      },
      {
        id: "traffic-marshal",
        title: "Traffic Marshal",
        category: "Professional Short Courses",
        summary:
          "Practical route management awareness for safer movement control in workplace settings.",
        suitableFor:
          "Suitable for personnel supporting vehicle and pedestrian site coordination.",
        detailHref: "/courses/short-courses",
      },
      {
        id: "manual-handling",
        title: "Manual Handling",
        category: "Professional Short Courses",
        summary:
          "Risk-aware handling principles to support safer lifting, movement, and workplace practice.",
        suitableFor:
          "Suitable for roles involving routine physical handling tasks.",
        detailHref: "/courses/short-courses",
      },
      {
        id: "health-and-safety",
        title: "Health & Safety",
        category: "Professional Short Courses",
        summary:
          "Core health and safety awareness to strengthen everyday compliance and operational consistency.",
        suitableFor:
          "Suitable for teams maintaining workplace safety standards across operations.",
        detailHref: "/courses/short-courses",
      },
      {
        id: "fire-safety",
        title: "Fire Safety",
        category: "Professional Short Courses",
        summary:
          "Essential fire awareness and response preparation for safer workplaces and risk reduction.",
        suitableFor:
          "Suitable for staff requiring role-relevant fire safety understanding.",
        detailHref: "/courses/short-courses",
      },
      {
        id: "care-certificate",
        title: "Care Certificate",
        category: "Professional Short Courses",
        summary:
          "Structured foundational learning for professional care support and duty-based responsibilities.",
        suitableFor:
          "Suitable for learners preparing for entry-level care-oriented roles.",
        detailHref: "/courses/short-courses",
      },
    ],
  },
];

export function getCourseBySlug(slug: string) {
  return courseDetails.find((course) => course.slug === slug);
}
