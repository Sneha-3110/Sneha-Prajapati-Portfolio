import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  figma,
  cpp,
  python,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  bidvoice,
  // tripguide,
  hdr,
  struct,
  threejs,
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
    id: "resume",
    title: "Resume"
  },
  {
    id: "contactlinks",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
  title: "API Integrator",
  icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name:"Python",
    icon: python,
  },
  {
    name:"C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2026 - April 2027",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2027 - Feb 2028",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2028 - Jan 2029",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2029 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Struct3D ",
    description:
      "Developing a 3D data structure visualizer that animates real-time operations (insertion, deletion, traversal) for structures like BSTs, stacks, queues, and graphs, enhancing conceptual understanding.",
    tags: [
      {
        name: "react",
        color: "bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent",
      },
      {
        name: "threejs",
        color: "bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent",
      },
      {
        name: "tailwind",
        color: "bg-gradient-to-r from-amber-400 to-lime-400 bg-clip-text text-transparent",
      },
      {
        name: "framer-motion",
        color: "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
      },
    ],
    image: struct,
    source_code_link: "https://github.com/Sneha-3110",
  },
  {
    name: "BidVoice",
    description:
      "Built a real-time auction web app where users can place bids using voice commands. Integrated voice recognition via the Web Speech API and enabled live bidding with socket communication. Added secure login, product listing, and countdown bidding features.",
    tags: [
      {
        name: "react",
        color: "bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent",
      },
      {
        name: "restapi",
        color: "bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent",
      },
      {
        name: "nodejs",
        color: "bg-gradient-to-r from-amber-400 to-lime-400 bg-clip-text text-transparent",
      },
      {
        name: "express",
        color: "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
      },
    ],
    image: bidvoice,
    source_code_link: "https://github.com/Sneha-3110",
  },
  {
    name: "Handwritten Digit Recognition",
    description:"Implemented an ML model to predict digits using the MNIST dataset with high accuracy. Integrated a real-time prediction interface for user input and live testing.",
    tags: [
      {
        name: "python",
        color: "bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent",
      },
      {
        name: "mnist",
        color: "bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent",
      },
      {
        name: "tensorflow",
        color: "bg-gradient-to-r from-amber-400 to-lime-400 bg-clip-text text-transparent",
      },
      {
        name: "ml",
        color: "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
      },
    ],
    image: hdr,
    source_code_link: "https://github.com/Sneha-3110",
  },
];

export { services, technologies, experiences, testimonials, projects };