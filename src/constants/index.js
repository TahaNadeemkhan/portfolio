import project1 from "../assets/projects/project-1.png"
import project2 from "../assets/projects/project-2.png"
import project3 from "../assets/projects/project-3.mp4"
import project4 from "../assets/projects/project-4.png"
import project5 from "../assets/projects/project-5.jpg"
import project6 from "../assets/projects/project-6.png"
import project7 from "../assets/projects/project-7.png"

export const HERO_CONTENT = `I am an energetic and motivated individual with a strong passion for Agentic and Robotic AI Engineering. I can build automation and AI solutions both with low-code tools like n8n and with code-first frameworks like Openai Ai Agent SDK, CrewAI depending on the project requirements. My ultimate goal is to utilize my skills and knowledge to create impactful, real-world applications that push the boundaries of AI and robotics.`

export const ABOUT_TEXT = `I’m a driven and enthusiastic individual with a deep passion for Agentic and Robotic AI Engineering. I’ve built AI agents that tackle real-world challenges, harnessing cutting-edge tools and frameworks like Python, OpenAI agent sdk, LangGraph, CrewAI, n8n, FastAPI for API development, Docker, and foundational Machine Learning/Deep Learning techniques. My focus is on sharpening my expertise in LLM frameworks while crafting innovative, practical solutions in AI. My ultimate aim is to apply my skills to develop groundbreaking applications that redefine the possibilities of AI and robotics.`

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
      vercelLink: "https://jobseekerpy-mpoci8x9cklfysjmebysss.streamlit.app/",
    
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
    title: "Advance AI CV Ranker",
    image: project1,
    description:
      'Developed an intelligent CV ranking system that allows recruiters to upload multiple resumes and evaluates them based on keyword matching and missing skills. Automatically scores and ranks candidates, providing actionable insights and enabling CSV export for streamlined hiring decisions. Designed a user-friendly interface for efficient recruiter workflow. Optimized for accuracy and ease of use, improving candidate shortlisting efficiency.',
    technologies: ["Python", "OpenAI Agent SDK", "streamlit"],
    vercelLink: "https://resume-screening-by-taha-nadeem.streamlit.app/"
  },
  
  {
    title: "AI-Powered CRM with n8n + Google Sheets",
    image: project6,
    description:
      'Built a lightweight AI-driven CRM integrating n8n, Google Sheets, and AI agents to manage leads, automate emails, and provide an interactive dashboard — enabling instant updates via natural language commands.',
    technologies: ["N8N", "Google Sheets", "Lovable"],
    vercelLink: "https://glass-growth-flow.lovable.app/"
  },

  {
    title: "AI-Powered Restaurant Bot (n8n + WhatsApp)",
    image: project7,
    description:
      'Developed a conversational restaurant assistant on WhatsApp handling voice/text orders, fetching menu, logging orders to Google Sheets, and managing table reservations via Google Calendar integration.',
    technologies: ["N8N", "Whatsapp API", "Google Sheets", "Google Calnder", "Gemini-API"],
    vercelLink: ""

  },


]

export const CONTACT = {
  address: "Remote + Karachi, Pakistan",
  phoneNo: "+92 3412000835 ",
  email: "tahak6884@gmail.com",
}

