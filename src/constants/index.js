import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    nss,
    django,
    sql,
    aws,
    carrent,
    jobit,
    tripguide,
    threejs,
    ytube,
    air,
    st
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Django Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name:"Django",
      icon:django,
    },
    {
      name:"AWS",
      icon: aws,
    },
    {
      name:"MySQL",
      icon:sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },


    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Tech-Team and Creatives Co-Commitee Member",
      company_name: "DJSNSS",
      icon: nss,
      iconBg: "#383E56",
      date: "November 2022 - Present",
      points: [
        "Developing and maintaining web applications during events and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Working with Daily Social Media Posts,Reels with use of Photoshop, Canva, Premiere Pro",
        "Organizing various events majorly Blood Donation Drive, Annual Charity Drive and working in a group",
      ],
    }

  ]

  
  
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
      name: "Asha Blood Bank",
      description:
        "Web-based platform that allows users to search, book, and manage blood donors, automatic triggers to alert shortage of blood units with data recovery and log system",
      tags: [
        {
          name: "Java/SwingsFX",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "NetBeans",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sarthakmahale123/blood-bank-management",
    },

    {
      name: "NextJS Airbnb Place Renting site",
      description:
        "NextJs Fullstack Clone of Airbnb website with Prisma, Oauth,React,Typescript,tailwind",
      tags: [
        {
          name: "NextJS,ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "red-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
      ],
      image:air,
      source_code_link: "https://rent-arnav.vercel.app/",
    },

    {
      name: "End to End AWS Youtube Analysis",
      description:
        "Youtube Api analysis for the demanding videos with live data streaming on Aws with crawler and Athene for querying",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "red-text-gradient",
        },
        {
          name: "AWS Athena,Quicksight,Glue",
          color: "green-text-gradient",
        },
      ],
      image: ytube,
      source_code_link: "https://github.com/ImArnav19/YTube-Aws-analysis",
    },

    {
      name: "Streamlit Data Cleaning and Mining Tool",
      description:
        "Functions Warehousing, with Regression,Clustering,Data Cleaning, Binning, Visualization tool with interacite graphs to analyze and perform mining operations on excel data.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
        {
          name: "Matplotlib,pandas,Scikit-learn",
          color: "green-text-gradient",
        },
      ],
      image:st,
      source_code_link: "https://github.com/ImArnav19/st_app/tree/main",
    },



    {
      name: "AQI Prediction",
      description:
        "AutoML Strategized Predicting Model to understand various factors such as humidity, sea-pressure,at-pressure to draw conclusions for weather prediction. Achieved almost 99% accuracy with Random Forest Regressor.",
      tags: [
        {
          name: "Flask RESTApi",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "sqlite",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ImArnav19/apsit_hack.git",
    },
    
      
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };