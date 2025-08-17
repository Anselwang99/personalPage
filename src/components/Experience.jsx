function Experience() {
    const experiences = [
        {
            id: 1,
            date: "Sept 2024 - Present",
            title: "Software Engineer",
            company: "Walmart",
            location: "Sunnyvale, CA",
            highlights: [
                "Designed and implemented backend services using Node.js, Express, and MongoDB to monitor end-to-end item health across Walmart's internal platforms, ensuring seamless product flow from creation to live listing while maintaining high code quality.",
                "Engineered a robust product creation pipeline with Node.js, RESTful APIs, and MongoDB to automate item onboarding, SKU, GTIN generation, and metadata enrichment, streamlining multi-channel product listings and reinforcing E2E feature ownership.",
                "Developed an automated monitoring and reporting tool with Node.js cron jobs and MongoDB Aggregation Framework to track real-time item health, flag listing issues, and support proactive resolution, emphasizing observability and continuous improvement.",
                "Integrated a Slack chatbot using Node.js and Slack API with internal monitoring services to deliver real-time updates, manage product listing exceptions, and enhance operational efficiency through cross-team collaboration.",
            ],
        },
        {
            id: 2,
            date: "Sept 2022 - Jan 2023",
            title: "Fullstack Software Engineer",
            company: "Sigillum",
            location: "New York, NY",
            highlights: [
                "Crafted a responsive, SEO-friendly web application utilizing React, SCSS, Material UI, Node.js, and MongoDB, building reusable components and dynamic routing to deliver end-to-end features across user profiles, administration pages, and surveys.",
                "Developed robust backend services with Express and MongoDB, including RESTful APIs and Google Cloud Storage integration for large file management; implemented a high-speed PDF generation service that reduced quote processing time to under 2 seconds, focusing on performance and low-latency requirements.",
                "Introduced real-time communication features using Socket.IO, Redis, and MongoDB to enable efficient chat between brokers and clients, while implementing secure user management flows with approval/rejection processes and input validation.",
                "Enhanced application quality and stability by incorporating unit testing (Jest, React Testing Library), managing state with Redux Toolkit, leveraging React Hooks for data handling, and optimizing API interactions with Axios interceptors.",
            ],
        },
        {
            id: 3,
            date: "Jun 2021 - Jan 2022",
            title: "Fullstack Developer",
            company: "Pathover",
            location: "San Francisco, CA",
            highlights: [
                "Developed and optimized multiple task management features using React, Redux, Bootstrap, and Axios, including task assignment, truck scheduling, and file uploading pages, thereby improving logistics coordination and user experience.",
                "Engineered backend services using Node.js, Express, Google Maps API, and MapQuest API to calculate optimized delivery routes and implement complex geospatial queries, reducing daily mileage by 20% and enabling real-time location tracking.",
                "Built a real-time notification system leveraging AWS Lambda, WebSocket, and Socket.IO to enhance instant communication between drivers and managers, while implementing JWT and local storage for secure user authorization.",
                "Maintained high code quality by creating reusable React components, applying React.memo for rendering optimizations, and employing unit testing with Jest and React Testing Library to support continuous integration and production reliability.",
            ],
        },
        {
            id: 4,
            date: "Jul 2020 - Sept 2020",
            title: "Software Developer",
            company: "Gaoyu Group Medical Division",
            location: "Chengdu, China",
            highlights: [
                "Developed a user-oriented self-monitoring Android mobile application using Android Studio based on requirements gathered from Qionglai Donghua Hospital, reducing COVID-19 transmission risk between patients and doctors by 65%.",
                "Collaborated with cross-functional teams to diagnose, test, and implement the mobile application, ensuring alignment with hospital requirements and government reporting metrics, while enforcing robust quality standards.",
            ],
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
                            <ul className="experience-highlights">
                                {exp.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
