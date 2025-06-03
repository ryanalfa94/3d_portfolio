import {
    java,
    python,
    cPlusPlus,
    backend,
    api,
    react,
    Django,
    MongoDB,
    ResearchAI,
    Toconnect,

    workout,
    anime,
    travel,
    soccer,
    code,
    
    emcc,
    gnc,
    
    Listalicious,
    BassBackend,
    portfolio,
    Graph
    
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
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "API Design",
    icon: api,
  },
  {
    title: "React Native",
    icon: react,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "C++",
    icon: cPlusPlus,
  },
  {
    title: "Django",
    icon: Django,
  },
  {
    title: "MongoDB ",
    icon: MongoDB,
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
      title: "Backend Engineer",
      company_name: "ResearchAI",
      icon: ResearchAI, 
      iconBg: "#E6DEDD",
      date: "May 2025 – Present",
      points: [
        "Building and maintaining backend APIs using Python and Django for research automation SaaS used by government and academic clients.",
        "Developing backend functionality for a recommendation engine that processes and ranks analytical data.",
        "Collaborating in Agile sprints to integrate features into existing research workflows with real-world impact.",
        "Writing clean, modular code aligned with research needs, including ethical AI integration.",
      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "Chens Group",
      icon: Toconnect, 
      iconBg: "#E6DEDD",
      date: "Aug 2024 – May 2025",
      points: [
        "Developed a secure, scalable REST API using Django and MongoDB to support social features like profiles, activities, chats, and deals.",
        "Implemented JWT authentication, token blacklisting, and admin privilege systems.",
        "Built modular backend systems for chat, profile updates, user moderation, and activity workflows.",
        "Organized code into reusable modules and authored complete API documentation for team use.",
      ],
    },
    {
      title: "STEM Tutor",
      company_name: "Estrella Mountain Community College",
      icon: emcc,
      iconBg: "#E6DEDD",
      date: "May 2022 – May 2023",
      points: [
        "Guided students in Java, Python, and C++, improving academic performance by 30%.",
        "Designed personalized learning plans and simplified technical topics using visual aids and analogies.",
        "Supported students in building strong problem-solving and study skills.",
      ],
    },
    {
      title: "Store Manager",
      company_name: "GNC – Avondale, AZ",
      icon: gnc,
      iconBg: "#E6DEDD",
      date: "Aug 2019 – Jan 2022",
      points: [
        "Achieved a 20% sales increase by implementing strategic customer engagement techniques.",
        "Supervised a team of 8 employees and optimized store operations to reduce losses and increase efficiency.",
        "Handled inventory, scheduling, quality control, and compliance with corporate policies.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "Listalicious",
      description:
        "Developed a full-stack grocery list sharing app using FastAPI and MongoDB. Enables real-time list updates, item prioritization, and collaborative access. Designed to scale and support future AI-based suggestions.",
      tags: [
        { name: "FastAPI", color: "blue-text-gradient" },
        { name: "MongoDB", color: "green-text-gradient" },
        { name: "React Native", color: "pink-text-gradient" },
      ],
      image: Listalicious, 
      source_code_link: "https://github.com/ryanalfa94/listalicious-backend",
    },
    {
      name: "Open Source Backend Framework",
      description:
        "Building a Backend-as-a-Service platform using FastAPI, supporting custom auth, project-based APIs, and modular extensions. Open source and designed for startups needing rapid backend deployment.",
      tags: [
        { name: "FastAPI", color: "blue-text-gradient" },
        { name: "JWT", color: "green-text-gradient" },
        { name: "Docker", color: "pink-text-gradient" },
      ],
      image: BassBackend, 
      source_code_link: "https://github.com/ryanalfa94/Baas_backend", 
    },
    {
      name: "Graph Visualizer",
      description:
        "Built a dynamic graph visualizer in Java using Swing and data structures. Users can create, visualize, and manipulate graphs with real-time updates and duplicate node handling logic.",
      tags: [
        { name: "Java", color: "blue-text-gradient" },
        { name: "Swing", color: "green-text-gradient" },
        { name: "Data Structures", color: "pink-text-gradient" },
      ],
      image: Graph, 
      source_code_link: "https://github.com/ryanalfa94/-Graph-Based-Navigation-System",
    },
    {
      name: "3D Developer Portfolio",
      description:
        "Created a responsive and animated 3D portfolio using React, Tailwind CSS, and Three.js. Showcases skills, projects, and professional experience in a modern and interactive format.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Three.js", color: "green-text-gradient" },
        { name: "Framer Motion", color: "pink-text-gradient" },
      ],
      image: portfolio, // take a screenshot of your homepage
      source_code_link: "https://github.com/ryanalfa94/3d_portfolio",
    },
  ];

  
  export { services, hobbies, experiences, projects };