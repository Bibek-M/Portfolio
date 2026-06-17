import {
  BookOpen,
  Code2,
  Database,
  Figma,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Settings,
  Twitter,
} from "lucide-react";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNotion,
  SiPostman,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandCpp, TbCoffee } from "react-icons/tb";
import type { ComponentType, CSSProperties, SVGProps } from "react";
import heroPortrait from "../assets/hero-portrait.png";

export type IconType =
  | ComponentType<{
      size?: number | string;
      className?: string;
      style?: CSSProperties;
      "aria-label"?: string;
    }>
  | ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type Fact = {
  label: string;
  value: string;
  icon: IconType;
};

export type SkillIcon = {
  label: string;
  icon: IconType;
  color: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icons: SkillIcon[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
};

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
};

export type NavItem = {
  label: string;
  path: string;
  icon: IconType;
};

export type PortfolioData = {
  profile: {
    name: string;
    role: string;
    intro: string;
    email: string;
    location: string;
    languages: string;
    focus: string;
    heroImage: string;
  };
  socials: SocialLink[];
  facts: Fact[];
  skills: SkillGroup[];
  projects: Project[];
  support: {
    title: string;
    description: string;
    cta: string;
    href: string;
    icon: IconType;
  };
  blog: BlogPost[];
  nav: NavItem[];
};

export const portfolioData: PortfolioData = {
  profile: {
    name: "Bibekananda Mohanta",
    role: "Frontend Developer",
    intro: "building clean, responsive and user-focused web experiences.",
    email: "bibekanandamohanta01@gmail.com",
    location: "India",
    languages: "English,",
    focus: "Software Development",
    heroImage: heroPortrait,
  },
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
    { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
    {
      label: "Email",
      href: "mailto:bibekanandamohanta01@gmail.com",
      icon: Mail,
    },
  ],
  facts: [
    { label: "Focus", value: "Frontend Development", icon: Github },
    { label: "Language", value: "English", icon: BookOpen },
    { label: "From", value: "India", icon: Settings },
    {
      label: "Email",
      value: "mailto:bibekanandamohanta01@gmail.com",
      icon: MessageCircle,
    },
  ],
  skills: [
    {
      title: "Software Development",
      description: "Building responsive and accessible web interfaces.",
      icons: [
        { label: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { label: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { label: "React", icon: FaReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Styling & Design",
      description: "Creating beautiful UI with modern styling tools.",
      icons: [
        { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { label: "Sass", icon: SiSass, color: "#CC6699" },
        { label: "Material UI", icon: SiMui, color: "#007FFF" },
      ],
    },
    {
      title: "Programming Languages",
      description: "Writing clean, efficient and maintainable code.",
      icons: [
        { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { label: "Python", icon: FaPython, color: "#3776AB" },
        { label: "C++", icon: TbBrandCpp, color: "#00599C" },
      ],
    },
    {
      title: "Backend Development",
      description:
        "Building robust APIs and scalable server-side applications.",
      icons: [
        { label: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
        { label: "Express", icon: SiExpress, color: "#111111" },
        { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { label: "REST API", icon: Database, color: "#2C2C2C" },
      ],
    },
    {
      title: "Tools & Technologies",
      description: "Using modern tools to build, ship and deploy faster.",
      icons: [
        { label: "Git", icon: FaGitAlt, color: "#F05032" },
        { label: "GitHub", icon: Github, color: "#111111" },
        { label: "Docker", icon: FaDocker, color: "#2496ED" },
        { label: "Vercel", icon: SiVercel, color: "#111111" },
      ],
    },
    {
      title: "Others",
      description: "Additional tools that improve productivity and workflow.",
      icons: [
        { label: "Figma", icon: Figma, color: "#F24E1E" },
        { label: "Postman", icon: SiPostman, color: "#FF6C37" },
        { label: "VS Code", icon: Code2, color: "#007ACC" },
        { label: "Notion", icon: SiNotion, color: "#111111" },
      ],
    },
  ],
  projects: [
    {
      title: "LearnLogicify",
      description: "EdTech platform to help students learn and track progress.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      tags: ["Next.js", "Tailwind", "MongoDB"],
      href: "#",
    },
    {
      title: "Winzee Chat",
      description: "Real-time chat application with authentication and rooms.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80",
      tags: ["React", "Socket.io", "Tailwind"],
      href: "#",
    },
    {
      title: "ChatGPT Clone",
      description: "AI powered chat interface with modern UI.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
      tags: ["React", "OpenAI API", "Tailwind"],
      href: "#",
    },
    {
      title: "Gemini Clone",
      description: "Clone of Gemini AI interface with conversation history.",
      image:
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=900&q=80",
      tags: ["React", "Firebase", "Tailwind"],
      href: "#",
    },
  ],
  support: {
    title: "Support My Work",
    description:
      "If you find my work helpful and want to support me, consider buying me a chai!",
    cta: "Buy Me a Chai",
    href: "https://www.buymeacoffee.com/",
    icon: TbCoffee,
  },
  blog: [
    {
      title: "Building a Modern Portfolio with Next.js 14",
      description:
        "A complete guide to building a fast and SEO-friendly portfolio using Next.js 14 and Tailwind CSS.",
      date: "May 12, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      href: "https://hashnode.com/",
    },
    {
      title: "React Best Practices I Follow in 2024",
      description:
        "Things I learned and follow while building scalable React applications.",
      date: "Apr 29, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
      href: "https://hashnode.com/",
    },
    {
      title: "Understanding Reusable Components",
      description:
        "How to build reusable, maintainable and accessible components in React.",
      date: "Apr 10, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      href: "https://hashnode.com/",
    },
  ],
  nav: [
    { label: "Home", path: "/", icon: Globe2 },
    { label: "Skills", path: "/skills", icon: Code2 },
    { label: "Projects", path: "/projects", icon: Database },
    { label: "Support", path: "/support", icon: MessageCircle },
    { label: "Blog", path: "/blog", icon: Mail },
  ],
};
