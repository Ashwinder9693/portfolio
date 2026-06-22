export const experiences = [
  {
    id: 4,
    company: "Amazon",
    period: "Oct 2024 – Present",
    duration: "1 yr 9 mos",
    location: "New Jersey · On-site",
    roles: [
      {
        role: "Area Manager, Operations (L4)",
        type: "Full-time",
        period: "Jul 2026 – Present",
        location: "PNE5 · Robbinsville, NJ",
        achievements: [
          "Lead a team of 100+ associates in a high-volume fulfillment operation, owning daily throughput, labor planning, and process optimization driven by operational data analysis",
          "Cut labor-time tracking discrepancies by 83% across 4–5 hour shifts during Phase 1 testing by building a Python tool that pulls live operational API data to detect and correct labor-flow mismatches before they post",
          "Analyze large, multidimensional operational datasets to validate data quality, identify trends, and translate findings into actionable process improvements for site leadership"
        ],
        tags: ["Python", "Operations", "Data Analysis", "API Integration", "Team Leadership"]
      },
      {
        role: "Fulfillment Center Associate",
        type: "Part-time",
        period: "Apr 2025 – Present · 1 yr 3 mos",
        location: "Monroe, NJ",
        achievements: [
          "Maintained inventory accuracy and order throughput across high-volume fulfillment operations while holding a 3.94 GPA as a full-time CS student"
        ],
        tags: ["Operations", "Inventory Accuracy", "Fulfillment"]
      },
      {
        role: "Sortation Associate",
        type: "Part-time",
        period: "Oct 2024 – Apr 2025 · 7 mos",
        location: "Edison, NJ",
        achievements: [
          "Achieved 99% package accuracy rate across high-throughput sortation workflows; exceeded daily output targets by 15%",
          "Developed execution discipline and operational precision in a zero-error-tolerance environment"
        ],
        tags: ["Sortation", "Throughput", "Quality Control"]
      }
    ]
  },
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Oasis Infobyte",
    type: "Internship",
    period: "Oct 2025 – Nov 2025",
    duration: "2 months",
    description:
      "Built production-style full-stack applications from scratch in a fully remote environment, taking end-to-end ownership from architecture through documentation.",
    achievements: [
      "Built a full-stack ATM Interface System in Core Java with secure PIN-based auth, balance inquiry, and complete transaction history",
      "Engineered a Library Management System using Java + JSP/Servlets + JDBC + MySQL on Apache Tomcat — designed relational schema, CRUD operations, and session management from scratch",
      "Applied MVC architecture, OOP principles, and modular design patterns across 3 modules, improving separation of concerns and test coverage",
      "Delivered both projects on schedule in a fully remote environment with complete technical documentation for handoff"
    ],
    tags: ["Java", "JSP/Servlets", "MySQL", "JDBC", "Apache Tomcat", "MVC", "OOP"]
  },
  {
    id: 2,
    role: "Research Assistant — Computational Data Analysis",
    company: "Princeton University",
    type: "Research",
    period: "Jul 2024 – Aug 2024",
    duration: "2 months",
    description:
      "Conducted faculty-supervised research on vestibular system stimulation through multidimensional sensor-data analysis, as part of Princeton's competitive Transfer Scholars Initiative.",
    achievements: [
      "Selected as one of ~30 students nationally for Princeton's competitive Transfer Scholars Initiative",
      "Processed and analyzed complex, multidimensional EKG sensor data using statistical methods to identify physiological patterns",
      "Leveraged Python for advanced data cleaning and visualization, translating raw time-series datasets into a structured technical presentation for university researchers"
    ],
    tags: ["Python", "EKG Sensors", "Statistical Analysis", "Data Visualization", "Research"]
  },
  {
    id: 3,
    role: "Peer Tutor",
    company: "Middlesex College",
    type: "Part-time",
    period: "Sep 2023 – May 2024",
    duration: "9 months",
    description:
      "Tutored a cohort of 26 students across Java, Data Structures, and web fundamentals — hands-on coding sessions drove measurably stronger engagement than lecture-only formats.",
    achievements: [
      "Tutored 26 students across Java, Data Structures, and web fundamentals through hands-on coding sessions",
      "Led weekly workshops on recursion, Big-O analysis, and debugging; introduced JUnit test-driven development, improving code quality in subsequent student assignments",
      "Translated abstract CS theory into practical exercises, closing concept-to-application gaps for students struggling with foundational topics"
    ],
    tags: ["Java", "Data Structures", "JUnit", "Web Fundamentals", "Teaching"]
  }
]

export const leadership = [
  {
    icon: "👨‍💼",
    role: "President",
    org: "Computer Science Club, Middlesex College",
    period: "Jan 2024 – May 2024",
    description:
      "Led club activities, organized coding competitions, and mentored fellow students in programming concepts and career development."
  },
  {
    icon: "🎯",
    role: "Vice President",
    org: "Computer Science Club, Middlesex College",
    period: "Sept 2023 – Dec 2023",
    description:
      "Supported club initiatives, helped expand membership engagement, and coordinated technical workshops."
  },
  {
    icon: "🤝",
    role: "Management Team Member",
    org: "National Service Scheme, SBSSU",
    period: "May 2022 – Dec 2022",
    description:
      "Coordinated community service projects and social impact initiatives, managing volunteer teams and project timelines."
  },
  {
    icon: "💰",
    role: "Treasury Team Member",
    org: "Compuwave Society, SBSSU",
    period: "Jan 2022 – Dec 2022",
    description:
      "Managed financial operations and budget planning for technical events, ensuring proper allocation of resources."
  }
]

export const experiencePageCopy = {
  title: "Experience",
  subtitle: "Professional journey and leadership roles that shaped my career",
  workLabel: "Professional Experience",
  leadershipLabel: "Leadership & Volunteering",
  skillsDevelopedLabel: "Skills Developed"
}

export const metrics = [
  { value: "4", label: "Work Experiences" },
  { value: "3.94", label: "GPA at Rutgers" },
  { value: "26+", label: "Students Mentored" },
  { value: "4", label: "Leadership Roles" }
]

export const skillsDeveloped = [
  {
    title: "Technical Skills",
    skills: ["Java", "Python", "SQL", "MVC Architecture", "REST APIs", "Statistical Data Analysis"]
  },
  {
    title: "Leadership Skills",
    skills: ["Mentoring", "Team Management", "Project Coordination", "Event Organization", "Agile Methodologies"]
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Adaptability", "Time Management", "Critical Thinking"]
  }
]
