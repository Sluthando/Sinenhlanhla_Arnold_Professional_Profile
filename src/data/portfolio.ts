// ============================================================
// PORTFOLIO DATA — Edit this file to update website content.
// ============================================================

export const personalInfo = {
  name: "Sinenhlanhla Arnold",
  roles: ["Aspiring Engineer", "Technology Enthusiast"],
  location: "South Africa",
  positioning: "Aspiring Engineer | Technology Enthusiast",
  intro:
    "An aspiring engineer with a background in Aeronautical Engineering studies, a strong interest in technology and problem-solving, and experience developing practical academic, digital and engineering-related projects.",
  bio: {
    bioIntro:
      "I developed an interest in engineering and pursued Aeronautical Engineering at the University of the Witwatersrand. My university experience exposed me to Engineering Mathematics, Physics, Mechanics, Thermodynamics, Fluid Mechanics and computational tools such as MATLAB.",
    bioExperience:
      "I have developed practical and professional experience through education-related work, tutoring, volunteering and virtual project experience. I am interested in solving problems, learning new technologies and gaining practical engineering experience.",
    bioGrowth:
      "My journey has strengthened my resilience, adaptability and commitment to continuous learning.",
  },
  whatIBring: [
    {
      title: "Problem Solving",
      description:
        "Approaching challenges with structured analytical thinking to find practical, effective solutions.",
    },
    {
      title: "Analytical Thinking",
      description:
        "Breaking down complex problems into manageable components using engineering fundamentals.",
    },
    {
      title: "Continuous Learning",
      description:
        "Actively developing new technical and professional skills across engineering and technology.",
    },
    {
      title: "Adaptability",
      description:
        "Adjusting to new environments, tools and challenges with a flexible and open mindset.",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  technical: [
    "MATLAB",
    "Engineering Mathematics",
    "Physics",
    "Mechanics",
    "Thermodynamics",
    "Fluid Mechanics",
    "Electricity",
    "Data Analysis",
    "Microsoft Excel",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Basic Programming",
  ],
  professional: [
    "Problem Solving",
    "Analytical Thinking",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Continuous Learning",
    "Responsibility",
    "Persistence",
  ],
};

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  skills: string[];
  projectUrl: string;
  githubUrl: string | null;
  hasGithub: boolean;
};

export const projects: Project[] = [
  {
    title: "Uzobusa STEM Hub",
    category: "Educational Technology / Web Development",
    description:
      "An educational technology platform designed to support learners through learning resources, practice activities, progress tracking and STEM opportunities.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Lovable",
      "GitHub",
      "AI-assisted development",
    ],
    skills: [
      "AI-assisted development",
      "Web development",
      "UI/UX design",
      "Problem solving",
      "Product thinking",
      "Educational technology",
    ],
    projectUrl: "#",
    githubUrl: "#",
    hasGithub: true,
  },
  {
    title: "Conductive Sanding Belts — ESD Prevention Concept",
    category: "Engineering / Virtual Internship Project",
    description:
      "An engineering concept exploring ways of reducing electrostatic discharge risks in belt-sanding applications. This project originated from an Excelerate Virtual Internship project involving Stanley Black & Decker belt sanders.",
    technologies: [
      "Research",
      "Product Analysis",
      "ESD Concepts",
      "Technical Problem Solving",
    ],
    skills: [
      "Research",
      "Problem solving",
      "Engineering analysis",
      "Product development thinking",
      "Technical communication",
    ],
    projectUrl: "#",
    githubUrl: null,
    hasGithub: false,
  },
  {
    title: "MATLAB & Engineering Analysis",
    category: "Engineering / Computational Analysis",
    description:
      "Computational engineering work involving numerical calculations, mathematical problem solving and engineering analysis.",
    technologies: [
      "MATLAB",
      "Numerical Analysis",
      "Engineering Thinking",
    ],
    skills: [
      "Computational thinking",
      "Mathematical problem solving",
      "Data analysis",
      "Engineering analysis",
    ],
    projectUrl: "#",
    githubUrl: null,
    hasGithub: false,
  },
];

export type EducationItem = {
  institution: string;
  programme: string;
  status?: string;
  period: string;
  highlights?: string[];
  isPrimary: boolean;
};

export const education: EducationItem[] = [
  {
    institution: "University of the Witwatersrand",
    programme: "BSc Engineering — Aeronautical Engineering",
    status: "Engineering studies undertaken",
    period: "2020–2023",
    highlights: [
      "Engineering Mathematics",
      "Physics",
      "Mechanics",
      "Thermodynamics",
      "Fluid Mechanics",
      "Electricity",
      "MATLAB",
    ],
    isPrimary: true,
  },
  {
    institution: "Matric",
    programme: "National Senior Certificate",
    period: "2018",
    highlights: [
      "Ranked #2 in school Top 10",
      "Mathematics distinction",
      "Physical Sciences distinction",
      "Life Orientation distinction",
    ],
    isPrimary: false,
  },
];

export type Certification = {
  name: string;
  organisation: string;
  description: string;
  year: string;
  certificateUrl: string;
  isVirtualInternship: boolean;
};

export const certifications: Certification[] = [
  {
    name: "ALX AiCE",
    organisation: "ALX",
    description: "AI and digital skills development programme.",
    year: "[Add Year]",
    certificateUrl: "#",
    isVirtualInternship: false,
  },
  {
    name: "ALX AI Starter Pack",
    organisation: "ALX",
    description: "AI-focused learning programme covering foundational AI concepts.",
    year: "[Add Year]",
    certificateUrl: "#",
    isVirtualInternship: false,
  },
  {
    name: "Excelerate Virtual Internship",
    organisation: "Excelerate",
    description: "ESD-focused engineering virtual project on preventing electrostatic discharge risks.",
    year: "[Add Year]",
    certificateUrl: "#",
    isVirtualInternship: true,
  },
];

export type ExperienceItem = {
  position: string;
  organisation: string;
  period?: string;
  description: string;
  skills?: string[];
  isCurrent?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    position: "STEM Tutor",
    organisation: "NextGen Tutors",
    period: "Current — Weekends",
    description:
      "Weekend tutoring experience providing academic learner support, helping learners strengthen their understanding of subject concepts through structured guidance and problem-solving.",
    skills: ["Communication", "Teaching", "Problem solving", "Patience", "Responsibility"],
    isCurrent: true,
  },
  {
    position: "Education Assistant",
    organisation: "Thabani-Isaac Gasa High School",
    period: "June 2025 – November 2025",
    description:
      "Supported classroom learning and day-to-day educational activities. Responsibilities included classroom support, organising learning materials, supporting corrections, maintaining classroom discipline and providing learner support.",
    skills: ["Communication", "Organisation", "Teamwork", "Responsibility", "Classroom support"],
  },
  {
    position: "Volunteer Tutor",
    organisation: "Thabani-Isaac Gasa High School",
    period: "February 2019 – July 2019",
    description:
      "Volunteer tutoring at Thabani-Isaac Gasa High School, providing academic learner support and helping learners with their understanding of subject concepts.",
    skills: ["Communication", "Teaching", "Patience", "Responsibility", "Problem solving"],
  },
  {
    position: "Volunteer",
    organisation: "WCCO Community Kitchen",
    description:
      "Volunteer supporting community kitchen operations through kitchen support, cleaning after service and maintaining food attendance records.",
    skills: ["Responsibility", "Teamwork", "Organisation", "Community involvement"],
  },
  {
    position: "Excelerate Virtual Internship",
    organisation: "Excelerate / Stanley Black & Decker",
    description:
      "Participated in a virtual engineering project focused on preventing electrostatic discharge risks in Stanley Black & Decker belt sanders, contributing to the development of the Conductive Sanding Belts concept.",
  },
];

export const contactInfo = {
  heading: "Let's Connect",
  text: "I'm open to opportunities that allow me to grow, apply my technical skills and contribute to meaningful projects. Feel free to connect with me regarding internships, engineering opportunities, technology projects or collaboration.",
  email: "sinenhlanhla.arnold99@gmail.com",
  github: "github.com/Sluthando",
  githubUrl: "https://github.com/Sluthando",
  linkedin: "LinkedIn Profile",
  linkedinUrl: "https://www.linkedin.com/in/sinenhlanhla-arnold-81610142a",
};

// CV download link — placeholder. Replace with actual CV PDF path when available.
export const cvUrl = "/cv/Sinenhlanhla_Arnold_CV.pdf";
