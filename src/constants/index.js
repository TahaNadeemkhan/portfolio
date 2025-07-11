import project1 from "../assets/projects/project-1.png"
import project2 from "../assets/projects/project-2.png"
import project3 from "../assets/projects/project-3.mp4"
import project4 from "../assets/projects/project-4.png"
import project5 from "../assets/projects/project-5.jpg"

export const HERO_CONTENT = `I am an energetic and motivated individual with a strong passion for Agentic and Robotic AI Engineering. I have developed AI agents capable of performing real-world tasks, leveraging advanced frameworks and technologies. My focus is on deepening my expertise in LLM frameworks and contributing to innovative solutions in AI. My ultimate goal is to utilize my skills and knowledge to create impactful, real-world applications that push the boundaries of AI and robotics.`

export const ABOUT_TEXT = `I’m a driven and enthusiastic individual with a deep passion for Agentic and Robotic AI Engineering. I’ve built AI agents that tackle real-world challenges, harnessing cutting-edge tools and frameworks like Python, OpenAI agent sdk, LangGraph, CrewAI, FastAPI for API development, Docker, and foundational Machine Learning/Deep Learning techniques. My focus is on sharpening my expertise in LLM frameworks while crafting innovative, practical solutions in AI. My ultimate aim is to apply my skills to develop groundbreaking applications that redefine the possibilities of AI and robotics.`

export const EXPERIENCES = [
  {
    year: "Present",
    role: "Aspiring Web Developer",
    company: "Dekodix",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Next.js. Currently building projects to enhance skills and understanding of RESTful APIs and database integration with Firebase and MongoDB.`,
    technologies: ["Typescipt", "React.js", "Next.js", "Firebase"],
  },
  {
    year: "Present",
    role: "Frontend Developer (Projects)",
    company: "Intact one Solution",
    description: `Designed and developed user interfaces for personal projects using Next.js and React. Focused on integrating frontend components with backend services and implementing responsive designs.`,
    technologies: ["HTML", "CSS", "React.js", "CMS"],
  },
  {
    year: "2024",
    role: "Freelance Web Developer",
    company: "FirstPageRankerz",
    description: `Worked on various web development projects as a freelancer, delivering customized solutions using JavaScript, React.js, and fierbase. Collaborated with clients to understand their requirements and implement effective web applications.`,
    technologies: ["JavaScript", "React.js", "Firebase", "Tailwind"],
  },
  {
    year: "Present",
    role: "software Developer",
    company: "Self-Directed Projects",
    description: `Engaging in self-study and projects to explore generative AI concepts and applications. Learning to develop AI-driven solutions and understanding data management with various technologies.`,
    technologies: ["nextjs", "Wordpress", "Elementor", "SEO"],
  },
]

export const PROJECTS = [
  {
    title: "Autonomous Interview Chatbot", 
    image: project3,
    description: "A fully automated, interactive interview scheduler that removes the hassle of back-and-forth scheduling!",
    technologies: ["Python", "OpenAI Agent SDK", "Chainlit"],  

},
,
  {
    title: "ATS Resume Analayzer",
    image: project4,
    description:
      "This is a coding blog project designed to create and display markdown-based blog posts. It features a clean and responsive UI with support for markdown rendering using Remark and Rehype, allowing users to write and share technical content. Built with TypeScript and Next.js, this blog is optimized for performance and user experience.",
    technologies: ["Python", "Google Gemini", "Streamlit", "Pinecone"],
    vercelLink: "https://atsanalyzer-main-cshpjkmepoonqqu46nrtjx.streamlit.app/",
  },
  
  {
    title: "Website insight Chatbot",
    image: project2,
    description:
      "This is a Point of Sale (POS) Restaurant Panel designed to streamline restaurant operations. It features an intuitive and responsive interface for managing orders, menus, and inventory. The project includes an Admin Panel for complete control, enabling restaurant managers to oversee staff, update menus, track sales, and generate detailed reports.",
    technologies: ["Python", "Streamlit", "Gemini", "huggingface"],
    vercelLink: "https://huggingface.co/spaces/tahak666/website_integration_app",


  },
  {
    title: "Invoice LLM App",
    image: project1,
    description:
      'The Invoice Analyzer is a web application that uses AI to extract information from invoice images. Built with Next.js for the frontend and FastAPI for the backend, it lets users upload an invoice, ask a question (like "What’s the total amount?"), and get an accurate AI-generated answer.',
    technologies: ["Python", "CrewAI", "Typescript", "Next.js"],
    
  },
  
]

export const CONTACT = {
  address: "Remote + Karachi, Pakistan",
  phoneNo: "+92 3412000835 ",
  email: "tahak6884@gmail.com",
}

