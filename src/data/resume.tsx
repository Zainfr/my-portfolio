import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { MongoDB } from "@/components/ui/svgs/mongodb";

export const DATA = {
  name: "Zain Shaikh",
  initials: "ZS",
  url: "https://github.com/Zainfr",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Full-Stack Developer building scalable SaaS and production-grade web platforms.",
  summary:
    "Full-Stack Developer with **1 year of professional experience** working on production-grade SaaS and web platforms. Experienced in end-to-end development, API integrations, performance optimization, and self-hosted infrastructure.",
  avatarUrl: "/me.png",

  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
    { name: "MongoDB", icon: MongoDB },
    { name: "Git", icon: Icons.git  },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "zxyn59@gmail.com",
    tel: "+91 8591261946",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Zainfr",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zain-shaikh-012b40250",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/zaintfr/",
        icon: Icons.instagram,
        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "https://www.youtube.com/@lightoftherecital",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:zxyn59@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ana Digital Media",
      href: "#",
      badges: ["Full-time"],
      location: "Mumbai, India",
      title: "Full Stack Developer",
      logoUrl: "/ana.jpeg",
      start: "Feb 2025",
      end: "Present",
      description:
        "Engineered and maintained scalable full-stack web applications using React, Node.js, and relational databases. Designed secure RESTful APIs with authentication and authorization. Integrated payment gateways like Razorpay and PhonePe. Automated Docker image builds and CI pipelines using Gitea Actions and deployed on VPS infrastructure.",
    },
  ],

  projects: [
    {
      title: "Leadbrix",
      href: "https://crm.leadbrix.in",
      dates: "June 2025 - Present",
      active: true,
      description:
        "CRM & Lead Management Platform. Improved database performance by ~150% via indexing optimizations. Implemented invoice generation, coupon systems, and structured billing flows. Self-hosted monitoring using Dozzle and Uptime Kuma.",
      technologies: [
        "Node.js",
        "React",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Facebook Graph API",
        "WhatsApp Business API",
      ],
      links: [
        {
          type: "Website",
          href: "https://crm.leadbrix.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/leadbrix.png",
      video: "",
    },

    {
      title: "Al-Hafidh",
      href: "https://alhafidh.vercel.app",
      dates: "Aug 2025 - Sep 2025",
      active: true,
      description:
        "Qur’an Memorization App that gained 100+ users on the first day. Features include customizable Mushaf reader, smart revision tracking, and weekly leaderboard resets.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://alhafidh.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alhafidh.png",
      video: "",
    },

    {
      title: "Kesta",
      href: "https://kesta.in",
      dates: "May 2025 - Present",
      active: true,
      description:
        "E-commerce marketplace with wishlist, admin-controlled homepage, advanced filtering, SEO improvements, and Razorpay + Shiprocket integrations.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Razorpay",
        "Shiprocket",
        "Google OAuth 2.0",
      ],
      links: [
        {
          type: "Website",
          href: "https://kesta.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kesta.png",
      video: "",
    },
    {
      title: "Rights Management System",
      href: "https://rms.panoramastudios.in",
      dates: "September 2025 - December 2025",
      active: true,
      description: 
      "Built an internal Film Rights Management System for Panorama Studios, handling complex licensing data across territories, platforms, and validity periods. Implemented role-based access control, advanced search, and automated expiry tracking to support enterprise-level operations.",
      technologies: [
        "React.js",
        "Node.js",
        "Material-UI",
        "PostgreSQL",
        "JWT Authentication",
        "BunnyCDN",
      ],
      links: [
        {
          type: "Website",
          href: "https://rms.panoramastudios.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rms2.png",
      video: "",
    },
    {
      title: "Audits Management System",
      href: "http://tbz-ui.duckdns.org",
      dates: "November 2025 - Present",
      active: true,
      description:
      "Built an internal Audit Management System for TBZ Jewelers, managing audit workflows, checklists, issue tracking, and reporting with secure role-based access and enterprise-grade data handling.", 
      technologies: [
        "React.js",
        "Node.js",
        "Material-UI",
        "PostgreSQL",
        "JWT Authentication",
        "BunnyCDN",
      ],
      links: [
        {
          type: "Website",
          href: "http://tbz-ui.duckdns.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ams2.png",
      video: "",
    },
    {
      title: "Kesta Admin Panel",
      href: "https://admin.kesta.in",
      dates: "November 2025 - Present",
      active: true,
      description:
      "Built an internal Admin Panel for Kesta, managing product listings, user accounts, and order tracking with secure role-based access and enterprise-grade data handling.", 
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "JWT Authentication",
        "BunnyCDN",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin.kesta.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kadmin.png",
      video: "",
    },
  ],

  education: [
    {
      school: "Anjuman-I-Islam Kalsekar Technical Campus",
      href: "#",
      degree: "Bachelor of Engineering in Computer Engineering",
      logoUrl: "/aiktc.jpg",
      start: "2022",
      end: "2026",
    },
  ],

  certifications: [
    {
      title: "TCS National Qualifier Test (NQT-IT)",
      issuer: "TCS iON",
      year: "2024",
      description:
        "Qualified in TCS NQT demonstrating aptitude in cognitive, technical, and programming skills.",
    },
  ],
} as const;
