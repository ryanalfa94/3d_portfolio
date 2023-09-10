import {
    java,
    python,
    cPlusPlus,
    c,

    workout,
    anime,
    travel,
    soccer,
    code,
    
    emcc,
    
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java",
      icon: java,
    },
    {
      title: "Python",
      icon: python,
    },
    {
      title: "C++",
      icon: cPlusPlus,
    },
    {
      title: "C",
      icon: c,
    },
  ];
  
  const technologies = [
    {
      name: "Anime",
      icon: anime,
    }, 
    {
      name: "Workout",
      icon: workout,
    },
    {
      name: "Travel",
      icon: travel,
    },
    {
      name: "Code",
      icon: code,
    }, 
    {
      name: "Soccer",
      icon: soccer,
    }
  ];
  
  const experiences = [

    {
      title: "Computer Science Tutor",
      company_name: "Estrella Mountain Community College",
      icon: emcc,
      iconBg: "#E6DEDD",
      date: "May 2022 - May 2023",
      points: [
        "Tutored students in Java, Python, MIPS Assembly, C, C++ including designing custom lesson plans and exam prep.",
        "Reviewed computer science class material with students to support their understanding and discovery of correct answers to problems.",
        "Incorporated technology from other subjects into lessons, expanding students' technical abilities with an integrated approach.",
        "Assisted students in developing and maintaining goal-oriented study habits for consistent academic success.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };