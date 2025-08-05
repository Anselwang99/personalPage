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
                "Developed a comprehensive task management and admin system with React frontend, Express backend, and an Angular version. Features include drag-and-drop UI, JWT authentication, and state management.",
            technologies: ["React", "Angular", "Express", "Node.js", "MongoDB"],
            image: taskImage,
            sourceCodeLinks: {
                react: "https://github.com/gabecpf97/employee_portal_react",
                express: "https://github.com/gabecpf97/employee_portal_express",
                angular: "https://github.com/gabecpf97/hr_portal_angular",
            },
        },
        {
            id: 5,
            title: "HomeDepot AI Chatbot",
            description:
                "Developed a Slack chatbot and web application to assist employees with product information and inventory management using OpenAI integration.",
            technologies: [
                "TypeScript",
                "Express",
                "Node.js",
                "OpenAI API",
                "Slack API",
            ],
            image: chatImage,
            sourceLink: "https://github.com/Anselwang99/Slackbot",
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
                "Full-stack portfolio with CI/CD workflows for both GitHub Pages and Google Cloud Run deployments, featuring dynamic path handling and contact form with EmailJS integration.",
            technologies: [
                "React 19",
                "Express",
                "Docker",
                "Vite",
                "GitHub Actions",
                "Cloud Run",
                "EmailJS",
            ],
            image: portfolioImage,
            liveLink: "https://fortunawang.com/personalPage/",
            sourceLink: "https://github.com/Anselwang99/personalPage",
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
                        sourceCodeLinks={project.sourceCodeLinks}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
