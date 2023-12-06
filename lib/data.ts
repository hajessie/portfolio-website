import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaInstagram, FaReact, FaShoppingBag, FaUserGraduate } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Social Media/Graphic Design Intern at Eighth College",
    location: "La Jolla, CA",
    description:
      "Interned as a Social Media/Graphic Design Intern at Eighth College, contributing to the creation of educational and marketing content published across various social media platforms. Utilized Adobe Suite to develop multimedia presentations for events and campus initiatives, actively driving engagement and supporting overall communication efforts.",
    icon: React.createElement(FaInstagram), // Change to a relevant icon for social media
    date: "2019",
  },
  {
    title: "Rosemead High School Adult School",
    location: "Rosemead, CA",
    description:
      "Provided integral support and guidance to 100+ adult learners, facilitating successful English language acquisition through diverse academic activities. Effectively addressed an average of 20 student inquiries daily, enhancing their overall learning experiences. Streamlined administrative tasks, achieving a 30% increase in operational efficiency.",
    icon: React.createElement(FaUserGraduate), // Change to a relevant icon for education/support
    date: "2019 - 2021",
  },
  {
    title: "J-Grails",
    location: "Los Angeles, CA",
    description:
      "Founded and led a successful online/in-person sneaker and clothing business. Achieved a 20% increase in conversion rates through product and sales expertise, and secured growth in repeat sales by cultivating strategic customer relationships.",
    icon: React.createElement(FaShoppingBag), // Change to a relevant icon for business
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
