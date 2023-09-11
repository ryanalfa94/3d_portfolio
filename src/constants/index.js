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
    
    colorPicker,
    socialMedia,
    cpu,
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
  
  const hobbies = [
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
  
  const projects = [
    {
      name: "Complete CPU ",
      description:
        "Created a CPU using LogicWorks by using Pipelining to ensure optimal performance. CPU can perform multiple operations such as Add, Subtract, Compare, Load words from memory, and save to memory. ",
      tags: [
        {
          name: "LogicWorks",
          color: "blue-text-gradient",
        },
      ],
      image: cpu,
    },
    {
      name: "Color Picker",
      description:
        "Created a color picker using Arduino and a color sensor leading a team of three people. Implemented agile development and organization to work efficiently for success.",
      tags: [
        {
          name: " Arduino programming language ",
          color: "blue-text-gradient",
        },
        {
          name: "3D modeling and printing",
          color: "green-text-gradient",
        },
      ],
      image: colorPicker,
    },
    {
      name: "social Media",
      description:
        "Developed a social media website for Engineering students by using HTML, CSS, and JavaScript.",
      tags: [
        {
          name: "HTML 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
      ],
      image: socialMedia,
    },
  ];
  
  export { services, hobbies, experiences, projects };