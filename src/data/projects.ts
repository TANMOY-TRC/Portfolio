import type { Projects } from "@/types/projects";

export const projects: Projects = [
  {
    title: "Personal Portfolio Website",
    image: "/project/portfolio.png",
    description:
      "A personal portfolio website engineered using Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel, this multi-page application features a modular, highly customizable architecture with a minimalistic design, along with an MDX-powered blog system. It effectively organizes professional and academic content to ensure a seamless and responsive user experience.",
    keywords: ["Next.js", "Tailwind CSS", "MDX"],
    duration: "Jun 2025 - Nov 2025",
    link: "https://tanmoyrc.vercel.app",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Portfolio",
      gitlab: "https://gitlab.com/TANMOY-TRC/Portfolio",
    },
  },
  {
    title: "Little Lemon Cross Platform Mobile App",
    image: "/project/little-lemon.png",
    description:
      "A cross-platform mobile application developed using React Native and Expo. The app features modular components, robust API consumption, and platform-adaptive UI, demonstrating advanced proficiency in JavaScript mobile development and component-based architecture.",
    keywords: ["Expo", "React Native", "JavaScript"],
    duration: "Aug 2025 - Sep 2025",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Meta-React-Native-Capstone",
    },
  },
  {
    title: "Little Lemon Android App",
    image: "/project/little-lemon.png",
    description:
      "A functional Android application developed using Kotlin and Jetpack Compose. The project implements modern UI components, structured navigation, and rigorous lifecycle handling, adhering to clean architecture principles to deliver a high-performance native experience.",
    keywords: ["Kotlin", "MaterialUI", "Jetpack Compose"],
    duration: "Jul 2025 - Aug 2025",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Meta-Android-Developer-Capstone",
    },
  },
  {
    title: "Little Lemon Database",
    image: "/project/little-lemon.png",
    description:
      "A comprehensive relational database system designed with ER diagrams. This project involved optimizing SQL queries and implementing stored procedures, showcasing expertise in database engineering.",
    keywords: ["MySQL", "MySQL Workbench", "Python"],
    duration: "Apr 2025 - May 2025",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Meta-Database-Engineer-Capstone",
    },
  },
  {
    title: "Little Lemon Full Stack Back-End",
    image: "/project/little-lemon.png",
    description:
      "A robust restaurant management system leveraging Django REST Framework. The system features token-based authentication, role-based permissions, and MySQL data persistence, integrated with a JavaScript front-end for dynamic API consumption.",
    keywords: ["Django", "DRF", "MySQL", "API"],
    duration: "Jan 2025 - Feb 2025",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Meta-Back-End-Developer-Capstone",
    },
  },
  {
    title: "Little Lemon API",
    image: "/project/little-lemon.png",
    description:
      "A production-grade REST API developed for menu management and booking services. Built with Django and DRF, this project emphasizes secure API design through the implementation of authentication protocols and role-based access control, ensuring data integrity and scalable backend performance.",
    keywords: ["Django", "DRF", "SQLite", "API"],
    duration: "Jan 2025 - Jan 2025",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Meta-Back-End-Developer-LittleLemonAPI",
    },
  },
  {
    title: "Little Lemon Front-End",
    image: "/project/little-lemon.png",
    description:
      "A responsive restaurant reservation web application created to deliver interactive booking components. The project utilizes React for front-end development and seamless REST API integration, highlighting expertise in modern UI/UX practices and state management.",
    keywords: ["React", "JavaScript", "UI/UX"],
    duration: "Nov 2024 - Dec 2024",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Meta-Front-End-Developer-Capstone",
    },
  },
  {
    title: "Alzheimer Detection Using Deep Learning",
    image: "/project/alzheimer.png",
    description:
      "A research initiative introducing a novel approach for early Alzheimer's detection using TensorFlow and CNNs. By employing ensemble learning and strict subject-level splitting to prevent data leakage, the model achieved an accuracy of 83.10% on the OASIS dataset, surpassing previous benchmarks for reliability.",
    keywords: ["TensorFlow", "CNN", "Transfer Learning"],
    duration: "Jan 2024 - May 2024",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/Alzheimers-Detection-Multi-View-Ensemble",
    },
  },
  {
    title: "COVID-19 Data Visualization",
    image: "/project/matlab-covid.png",
    description:
      "An interactive data visualization tool developed using MATLAB's Object-Oriented Programming and GUI framework. This application processes and visualize COVID-19 data from the Johns Hopkins dataset, offering an intuitive interface to explore global pandemic trends.",
    keywords: ["MATLAB", "OOP", "GUI"],
    duration: "Sep 2020 - Sep 2020",
    sourceCode: {
      github: "https://github.com/TANMOY-TRC/MATLAB-COVID-19-Data-Visualization",
    },
  }
];