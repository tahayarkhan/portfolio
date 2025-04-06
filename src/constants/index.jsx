import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/CarbonX.png";
import projectImage2 from "../assets/CC-project.jpeg";
import projectImage3 from "../assets/AI-tutor.jpg";
import projectImage4 from "../assets/skill-match.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/#" },
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  // { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Taha",
  greet: [
    "Hello! 👋",
    "Welcome to my portfolio! 💻",
    "I'm a Software Engineer 🚀",
    "AI and ML Enthusiast 🧠",
  ],
  location: "Toronto, ON",
  education: "Toronto Metropolitan University",
  degree: "Bachelor of Science in Computer Science",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Carbon Footprint Predictor",
    description:
      "JavaScript • TensorFlow.js • Axios • React • Node.js • Express • MongoDB • REST API",
    image: projectImage1,
    githubLink: "https://github.com/tahayarkhan/CarbonX",
    projectLink: "",
  },
  {
    id: 2,
    name: "AI Credit Card Fraud Detector",
    description:
      "Python • NumPy • Pandas • Scikit-learn • Streamlit",
    image: projectImage2,
    githubLink: "https://github.com/tahayarkhan/CC-Fraud-Detector",
    projectLink: "https://ai-cc-fraud-detector.streamlit.app/",
  },
  {
    id: 3,
    name: "My AI Tutor",
    description:
      "Python • React • JavaScript • AI Cohere API • Flask",
    image: projectImage3,
    githubLink: "https://github.com/tahayarkhan/My-AI-Tutor",
    projectLink: "",
  },
  {
    id: 4,
    name: "Skill-Match",
    description:
      "SDLC • JavaScript • React • Vite • Tailwind CSS • Python • Supabase • AI Cohere API • JMeter • BCrypt",
    image: projectImage4,
    githubLink: "https://github.com/tahayarkhan/Skill-Match",
    projectLink: "",
  },
];

// export const BIO = [
//   "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
//   "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
//   "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
// ];

// export const SKILLS = [
//   {
//     icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
//     name: "React",
//     experience: "2+ years",
//   },
//   {
//     icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
//     name: "Next.js",
//     experience: "1+ year",
//   },
//   {
//     icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
//     name: "MongoDB",
//     experience: "1.5+ years",
//   },
//   {
//     icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
//     name: "Redis",
//     experience: "1+ year",
//   },
//   {
//     icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
//     name: "Node.js",
//     experience: "2+ years",
//   },
//   {
//     icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
//     name: "PostgreSQL",
//     experience: "1+ year",
//   },
// ];

export const EXPERIENCES = [
  {
    title: "Technology Research Analyst",
    company: "Bank of Montreal",
    duration: "January 2025 - August 2025",
    description:
      "As a Technology Research Analyst at the Bank of Montreal, I developed and optimized web scraping solutions using Selenium to extract employee and revenue data for over 1,000 companies. I enhanced scraper accuracy by 55%, ensuring higher data reliability. Additionally, I automated data collection for trending tech news topics, streamlining insights for the tech research team.",
  },
  {
    title: "UI/UX Developer",
    company: "Bank of Montreal",
    duration: "January 2025 - August 2025",
    description:
      "As a UI/UX Developer at the Bank of Montreal, I contributed to BMO's innovation platform by designing and developing custom web components. I worked closely with cross-functional teams to create intuitive, high-performance user interfaces that improved the overall user experience. Additionally, I enhanced the responsiveness of the platform by 20%, ensuring smoother and more efficient interactions for users.",
  },
  {
    title: "Software Developer Intern",
    company: "MAX - Muslims Achieving Excellence",
    duration: "May 2024 - August 2024",
    description:
      "As a Software Developer Intern at MAX, I developed login and signup components using React and JavaScript, implementing a multi-step profile setup with Chakra UI for improved UI/UX. I integrated the frontend with REST APIs for real-time updates and wrote Lambda functions for the AWS SAM Application, enhancing system scalability.",
  },
];

// export const EDUCATION = [
//   {
//     degree: "Bachelor of Science in Computer Science",
//     institution: "Toronto Metropolitan University",
//     duration: "September 2022 - April 2026 (Expected)",
//     description:
//       "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
//   },
// ];


export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/tahayarkhan",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/taha-yar-khan/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
