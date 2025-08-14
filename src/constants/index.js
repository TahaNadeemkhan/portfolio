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
    role: "Agentic AI Developer",
    company: "Pakistan Recruitment",
    description: `During my Agentic AI internship at Pakistan Recruitment, I automated key hiring tasks by building smart tools such as, Lead Finder that extracts contact details from websites, An Interview Bot that conducts voice-based candidate screenings, A Resume Expert that checks resumes and gives career advice, and A Social Post Maker that creates recruitment content automatically. These AI tools helped reduce manual work by 70% and made the hiring process much faster.`,
    technologies: ["Python", "OpenAI Agent SDK", "Streamlit", "NeonDB"],
  },
]

export const PROJECTS = [
  {
    
      title: "CV Analyzer & Career Coach",
      image: project4,
      description:
        "Developed an AI-powered resume optimization system that evaluates applicant-JD compatibility using ATS scoring, generates tailored career advice via Gemini AI’s NLP, and produces keyword-optimized profile summaries. This solution enhanced candidate screening quality, resulting in a 40% increase in interview conversion rates by automatically matching qualified applicants with relevant opportunities",
      technologies: ["Python", "Google Gemini", "Streamlit", "LLMops"],
      vercelLink: "https://jobseeker-pakistan-recruitment.streamlit.app/",
    
    },
    {
      title: "Cross-Platform Social Media Manager",
      image: project2,
      description:
        "Created an AI content engine that automatically generates platform-specific posts for LinkedIn, Facebook, and YouTube - including video titles/descriptions - while integrating with calendar APIs for optimal scheduling. This unified social media automation system reduced content management workload by 65%, enabling recruiters to focus on high-value engagements instead of manual posting.",
      technologies: ["Python", "Streamlit", "Gemini", "linkedin/Facbook API's"],
      vercelLink: "https://social-media-manage.streamlit.app/",
  
  
    },
  {
    title: "Autonomous Interview Scheduler", 
    image: project3,
    description: "A fully automated, interactive interview scheduler that removes the hassle of back-and-forth scheduling!",
    technologies: ["Python", "OpenAI Agent SDK", "Chainlit"],  

  },
  {
    title: "Voice-Based AI Interview System",
    image: project5,
    description:
      "Designed an AI-powered voice interview system that conducts real-time, JD-specific conversations with candidates using speech recognition, automatically generates scored transcripts, and provides recruiters with a centralized dashboard for evaluation. This end-to-end automation replaced 90% of manual screening interviews while delivering standardized candidate assessments",
    technologies: ["Python", "OpenAI Agent SDK", "Gemini API Key", "Streamlit", "NeonDB"],
    vercelLink: "https://interview-app-t5cgv9gsa7mom8adhynpxd.streamlit.app/",
  },

  {
    title: "Invoice Analyzer",
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

