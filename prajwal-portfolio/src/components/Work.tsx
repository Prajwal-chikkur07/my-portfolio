import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Employee Management System",
    category: "Web Application",
    tools: "React, Vite, JavaScript, Vercel",
    description:
      "A web app to manage employee data, roles, and records with a simple interface for adding, updating, and organizing employee information.",
    image: "/images/ems.png",
    link: "https://prajwalems.vercel.app/",
  },
  {
    title: "Result Analyzer",
    category: "Data Analysis Tool",
    tools: "Python, JavaScript, Render",
    description:
      "A web-based tool that analyzes student academic results and generates performance summaries and statistics for educators and students.",
    image: "/images/result-analyzer.png",
    link: "https://result-analyzer-kupz.onrender.com/",
  },
  {
    title: "AI Schools",
    category: "AI Education Platform",
    tools: "React, Vite, Vercel",
    description:
      "A platform to showcase and organize AI-related schools and educational resources, helping users explore AI learning opportunities.",
    image: "/images/ai-schools.png",
    link: "https://ai-schools-pearl.vercel.app/",
  },
  {
    title: "Translation Agent",
    category: "AI-Powered Translation",
    tools: "Python, NLP, AI",
    description:
      "An AI-powered system for translating text between languages efficiently using intelligent translation capabilities.",
    image: "/images/translation-agent.png",
    link: "https://github.com/Prajwal-chikkur07/Translation-agent",
  },
  {
    title: "Arrow AI Assistant",
    category: "Voice AI Assistant",
    tools: "Python, Speech Recognition, AI",
    description:
      "A voice-enabled AI assistant that automates tasks through natural language — web searches, system control, and query answering.",
    image: "/images/arrow-ai.png",
    link: "https://github.com/Prajwal-chikkur07/Ai-voice-assistant",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <span className="project-number">0{index + 1}</span>
                <h4>{project.title}</h4>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tools">
                  <span className="tools-label">Tools & Features</span>
                  <p>{project.tools}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="project-link"
                  data-cursor="disable"
                >
                  View Project <MdArrowOutward />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
