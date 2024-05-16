import React from 'react'

// import images
import portfolioImg from "../../public/images/portfolio.png";
import attendanceImg from "../../public/images/attendanceApp.png";
import { LuGraduationCap } from 'react-icons/lu';
import { GiNotebook } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";


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

  export const projectsData = [
    {
      title: "Portfolio Website",
      status: "Completed",
      description:
        "My personal portfolio website.",
      tags: ["Next.js", "Tailwind", "Framer", "TypeScript"],
      gitUrl: 'https://github.com/ivan-rh22/portfolio',
      imageUrl: portfolioImg,
    },
    {
      title: "Attendance App",
      status: "In Progress",
      description:
        "Started this project with a professor to help improve attendance tracking. Will soon be released on the App Store and Google Play Store.",
      tags: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      gitUrl: 'https://github.com/senior-group/attendance-app',
      imageUrl: attendanceImg,
    },
  ] as const;

  export const skillsData = [
    "Flutter",
    "Firebase",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Ruby on Rails",
    "Express",
    "PostgreSQL",
    "Python",
    "Dart",
    "C",
    "C++",
    "Ruby",
    "Swift",
    "Julia",
    "Django",
    "Framer Motion",
    "Git",
    "Jira",
    "Figma",
  ] as const;

export const experiencesData = [
  {
    title: "Graduated HighSchool and Community College",
    location: "Mission, TX",
    description:
      "I graduated from high school with an Interdisciplinary Studies Associates of Science degree. Started programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Internship with Dr. Dimah Dera",
    location: "Edinburg, TX",
    description:
      "I interned with Dr. Dera to learn the basics of Machine Learning and Data Science. I learned how to use Python, Pandas, and Numpy.",
    icon: React.createElement(GiNotebook),
    date: "2022",
  },
  {
    title: "Brookhaven National Laboratory Internship",
    location: "Remote",
    description:
      "Attended a summer internship at Brookhaven National Laboratory. I worked on a project that introduced me to the world of Quantum Computing.",
    icon: React.createElement(GiNotebook),
    date: "Summer 2023",
  },
  {
    title: "Graduated from University of Texas Rio Grande Valley",
    location: "Edinburg, TX",
    description:
      "I graduated with a Bachelor of Science in Computer Science. I learned about algorithms, data structures, and software engineering. I also learned about web development, mobile development, and cloud computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Freelance",
    location: "Edinburg, TX",
    description:
      "I am working as a freelance developer. I am working on a project that will soon be released on the App Store and Google Play Store.",
    icon: React.createElement(SiFreelancer),
    date: "Present",
  },
] as const;