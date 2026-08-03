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
    "Full-Stack Developer with **1+ year of professional experience** working on production-grade SaaS and web platforms. Experienced in end-to-end development, API integrations, performance optimization, and self-hosted infrastructure.",
  avatarUrl: "/me.jpg",

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
    { name: "Go", icon: Icons.golang},
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
      badges: ["Full-time", "On-Site"],
      location: "Mumbai, India",
      title: "Full Stack Developer",
      logoUrl: "/ana.jpeg",
      start: "Feb 2025",
      end: "Present",
      description:
        "Engineered and maintained scalable full-stack web applications. Designed secure RESTful APIs with authentication and authorization. Integrated payment gateways like Razorpay and PhonePe. Automated Docker image builds and CI pipelines using Gitea Actions and deployed on VPS infrastructure.",
    },
  ],

  projects: [
    {
      title: "Leadbrix",
      href: "https://crm.leadbrix.in",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A Real-Estate CRM platform designed to streamline lead management for real estate agencies and agents.",
      technologies: [
        "Node.js",
        "React",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Facebook Graph API",
        "WhatsApp Business API",
        "SMTP2GO"
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
      techDescription: "Developed end-to-end business automation solutions. \n\n* **Payments & Billing:** Integrated Razorpay Subscription Management for flexible billing plans and Zoho Invoice for automated GST workflows.\n* **Customer Engagement:** Implemented WhatsApp Cloud API-based lead automation for instant communication.\n* **Infrastructure:** Set up a self-hosted monitoring infrastructure using Dozzle and Uptime Kuma for real-time log management, application observability, and uptime tracking.",
    },
    {
      title: "Rights Management System",
      href: "https://rms.panoramastudios.in",
      dates: "September 2025 - December 2025",
      active: true,
      description: 
      "An enterprise-grade internal Film Rights Management System for tracking complex licensing data across territories, platforms, and validity periods.",
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
      techDescription: "Built the entire platform as a solo developer for Panorama Studios, handling both frontend and backend architectures.\n\n* **Core Systems:** Implemented secure role-based access control (RBAC), advanced search filtering, and automated expiry tracking.\n* **Data Management:** Designed robust database schemas in PostgreSQL to handle complex, multi-dimensional licensing data.",
    },
    {
      title: "FSG Donation",
      href: "https://app.ssdfoundation.com",
      dates: "Jun 2026 - Aug 2026",
      active: true,
      description:
      "An internal donation management platform designed to streamline donor tracking and receipt generation for SSDFoundation.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "VPS",
        "Capacitor.js",
        "Tailwind CSS",
        "Android Studio",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://api.ssdfoundation.com/health",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/FSG.png",
      video: "",
      techDescription: "Developed an enterprise-grade role-based access control (RBAC) system to securely manage and track donor data.\n\n* **Core Systems:** Engineered automated receipt generation workflows.\n* **Cross-Platform:** Built and deployed a mobile application using Capacitor.js and Android Studio for on-the-go access.",
    },
    {
      title: "Al-Hafidh",
      href: "https://alhafidh.vercel.app",
      dates: "Aug 2025 - Sep 2025",
      active: true,
      description:
        "A Qur'an memorization application featuring a customizable Mushaf reader, smart revision tracking, and competitive weekly leaderboards.",
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
      techDescription: "Developed a full-stack application that successfully acquired 100+ users on its launch day.\n\n* **Core Features:** Engineered the interactive Mushaf reader and intelligent revision tracking algorithms.\n* **Architecture:** Built with Next.js 14 and Firebase, utilizing Tailwind CSS for a responsive, modern UI.",
    },

    {
      title: "NekiHub – Community Welfare Platform",
      href: "https://nekihub.com",
      dates: "August 2025 - November 2025",
      active: true,
      description:
      "A community welfare platform dedicated to social good and volunteer coordination.",
      technologies: [
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "JWT Authentication",
        "Google OAuth 2.0",
        "Cloudinary",
        "SMTP2GO",
      ],
      links: [
        {
          type: "Website",
          href: "https://nekihub.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nekihub.png",
      video: "",
      techDescription: "Served as the Technical Lead, coordinating the overall development lifecycle to ensure timely project delivery.\n\n* **Leadership:** Managed code reviews, merged pull requests, and mentored developers.\n* **Backend Development:** Assisted with core backend architecture using Node.js, MongoDB, and JWT authentication.\n* **Deployment:** Oversaw deployment pipelines and infrastructure management.",
    },
    {
      title: "Kesta",
      href: "https://kesta.in",
      dates: "May 2025 - Present",
      active: true,
      description:
        "A fully-featured e-commerce marketplace platform that sells phonecases.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Razorpay",
        "Shiprocket",
        "Google OAuth 2.0",
        "SMTP2GO"
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
      techDescription: "Developed core e-commerce functionalities to deliver a seamless shopping experience.\n\n* **Platform Features:** Built a wishlist system, dynamic admin-controlled homepage, and advanced product filtering.\n* **Integrations:** Successfully integrated Razorpay for secure payment processing and Shiprocket for logistics management.\n* **Optimization:** Implemented technical SEO improvements across the platform.",
    },
    {
      title: "Kesta Admin Panel",
      href: "https://admin.kesta.in",
      dates: "November 2025 - Present",
      active: true,
      description:
      "A comprehensive internal administration dashboard for managing the Kesta e-commerce ecosystem.", 
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
      techDescription: "",
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
