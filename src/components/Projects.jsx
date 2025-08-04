import ProjectCard from "./ProjectCard";
import stockImage from "../assets/pics/StockSentiment.png";
import taskImage from "../assets/pics/TaskManage.png";
import chatImage from "../assets/pics/Slack.png";
import covidImage from "../assets/pics/CovidApp.png";
import portfolioImage from "../assets/pics/PersonalPage.png";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Stock Sentiment Analysis",
            description:
                "Used VADER sentiment analysis and ML models (Linear, Logistic, Random Forest, SVR) on 40,000+ feeds to predict market movement. Achieved RMSE of 6.21.",
            technologies: ["Python", "ML", "NLP", "Sentiment Analysis"],
            image: stockImage,
        },
        {
            id: 2,
            title: "Task Management App",
            description:
                "Developed a comprehensive task management system with drag-and-drop UI, optimized routes, and notification system with JWT authentication.",
            technologies: ["React", "Node.js", "MongoDB", "JWT"],
            image: taskImage,
        },
        {
            id: 3,
            title: "Real-time Chat Application",
            description:
                "Built a full-stack chat application with real-time messaging using Socket.IO, React frontend, and Express/MongoDB backend.",
            technologies: ["React", "Socket.IO", "Express", "MongoDB"],
            image: chatImage,
        },
        {
            id: 4,
            title: "COVID Self-Monitoring App",
            description:
                "Developed an Android application for COVID-19 self-monitoring with symptom tracking and reporting features.",
            technologies: ["Android", "Java", "SQLite"],
            image: covidImage,
        },
        {
            id: 5,
            title: "Personal Portfolio Website",
            description:
                "Modern responsive portfolio website built with React and Vite to showcase skills, experience, and projects.",
            technologies: ["React", "Vite", "CSS3", "Responsive Design"],
            image: portfolioImage,
        },
    ];

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        liveLink={project.liveLink}
                        sourceLink={project.sourceLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
