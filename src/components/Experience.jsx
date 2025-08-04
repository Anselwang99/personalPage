function Experience() {
    const experiences = [
        {
            id: 1,
            date: "Sept 2024 - Present",
            title: "Software Engineer",
            company: "Walmart",
            location: "Sunnyvale, CA",
            description:
                "Developing backend services with Node.js/Express/MongoDB, managing product pipeline, creating monitoring tools, and implementing Slack chatbot.",
        },
        {
            id: 2,
            date: "Sept 2022 - Jan 2023",
            title: "Fullstack Software Engineer",
            company: "Sigillum",
            location: "New York, NY",
            description:
                "Built React app, developed backend with Express/MongoDB, implemented chat functionality with Socket.IO, and created PDF service.",
        },
        {
            id: 3,
            date: "Jun 2021 - Jan 2022",
            title: "Fullstack Developer",
            company: "Pathover",
            location: "San Francisco, CA",
            description:
                "Created task management UI, optimized routes, implemented notification system, and integrated JWT authentication.",
        },
        {
            id: 4,
            date: "Jul 2020 - Sept 2020",
            title: "Software Developer",
            company: "Gaoyu Group",
            location: "Chengdu, China",
            description: "Developed Android COVID self-monitoring application.",
        },
    ];

    return (
        <section className="experience-section">
            <h2>My Experience</h2>
            <div className="timeline">
                {experiences.map((exp) => (
                    <div key={exp.id} className="timeline-item">
                        <div className="timeline-date">{exp.date}</div>
                        <div className="timeline-content">
                            <h3>{exp.title}</h3>
                            <h4>
                                {exp.company} -{" "}
                                <span className="location">{exp.location}</span>
                            </h4>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
