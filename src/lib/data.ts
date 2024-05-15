import React from 'react'

// import images
import portfolioImg from "../../public/images/portfolio.png";
import attendanceImg from "../../public/images/attendanceApp.png";


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