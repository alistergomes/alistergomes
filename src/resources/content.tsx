import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, InlineCode } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alister",
  lastName: "Gomes",
  name: "Alister Gomes",
  role: "Software Engineer",
  avatar: "/images/avatar.jpg", // Replace this image in public/images folder
  email: "2918333@vikes.csuohio.edu",
  location: "America/New_York",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Sharing thoughts on Software Engineering, RPA, and AI.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alister-gomes/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer & RPA Specialist</>,
  featured: {
    display: false, 
    title: "Featured Project",
    href: "/work/rpa-automation",
  },
  subline: (
    <>
      I'm Alister, a Master's student in Software Engineering at <InlineCode>Cleveland State University</InlineCode> with over 3 years of experience engineering advanced RPA solutions and intelligent automation frameworks.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}`, 
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Alister is a Software Engineer based in Cleveland, Ohio, currently pursuing his Master of Science. 
        With a strong background in automation, he has spearheaded the design of scalable RPA solutions 
        and integrated AI capabilities to optimize complex workflows. He is passionate about constant 
        improvement, leadership, and solving critical problems through code.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Novigo Solutions Pvt. Ltd.",
        timeframe: "Aug 2021 - Dec 2024",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Spearheaded the design and implementation of scalable RPA solutions using UiPath, addressing complex automation challenges across various industries.
          </>,
          <>
            Enhanced automation frameworks by incorporating advanced scraping and in-built activities, resulting in a 50% increase in development efficiency.
          </>,
          <>
            Collaborated with stakeholders to integrate Intelligent Process Automation (IPA), combining RPA with AI to achieve autonomous automation.
          </>,
          <>
            Provided training and mentorship to junior developers, fostering a culture of continuous learning within the RPA team.
          </>,
        ],
        images: [], 
      },
      {
        company: "Novigo Solutions Pvt. Ltd.",
        timeframe: "Aug 2021 - (Previous Role)",
        role: "Software Engineer",
        achievements: [
          <>
            Engineered advanced RPA solutions using UiPath Studio, enhancing operational efficiency and reducing manual intervention.
          </>,
          <>
            Collaborated with cross-functional teams to identify automation opportunities, leading to a 40% reduction in processing time for key workflows.
          </>,
          <>
            Implemented high-security automation protocols utilizing auto-login functionality for locked screen operations to ensure data privacy.
          </>,
          <>
            Leveraged UiPath's AI Center to incorporate machine learning models into automation workflows for intelligent decision-making.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Cleveland State University",
        description: (
          <>
            Master of Science in Software Engineering (Jan 2025 - Dec 2026)
            <br />
            Coursework: Software Project Management, QA, Data Mining, AI, Deep Learning, Quantum ML.
          </>
        ),
      },
      {
        name: "St. Joseph Engineering College",
        description: (
          <>
            Bachelor of Engineering in Computer Science (July 2016 - Aug 2021)
            <br />
            Coursework included Web Development, Java, Python, Cloud Computing, and OS.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: <>Proficient in core programming languages for diverse applications.</>,
        tags: [
          { name: "Python" },
          { name: "Java" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "SQL" },
        ],
      },
      {
        title: "RPA & Tools",
        description: <>Specialized in Robotic Process Automation and workflow tools.</>,
        tags: [
          { name: "UiPath" },
          { name: "Power Automate" },
          { name: "Blue Prism" },
          { name: "Postman" },
          { name: "Git" },
        ],
      },
      {
        title: "Web & Cloud",
        description: <>Full-stack web development and cloud infrastructure.</>,
        tags: [
          { name: "React.js" },
          { name: "Angular" },
          { name: "AWS" },
          { name: "RESTful APIs" },
          { name: "Linux" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights & Updates",
  description: `Read about my latest projects and technical insights.`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "My Work",
  description: `Featured projects and automations by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery",
  description: "A collection of images",
  images: [], 
};

export { person, social, newsletter, home, about, blog, work, gallery };
