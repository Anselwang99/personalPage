import SkillBar from "./SkillBar";

function Skills() {
    const programmingSkills = [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
    ];

    const frameworkSkills = [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "NodeJS", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Nginx", level: 70 },
        { name: "Google Cloud", level: 65 },
        { name: "Bootstrap", level: 80 },
        { name: "Material UI", level: 85 },
        { name: "React Testing Library", level: 75 },
    ];

    const toolSkills = [
        { name: "AWS", level: 70 },
        { name: "Mongoose", level: 85 },
        { name: "NPM", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Git", level: 90 },
        { name: "Jira", level: 80 },
        { name: "Heroku", level: 75 },
        { name: "JWT", level: 80 },
        { name: "Bcrypt", level: 85 },
        { name: "Mocha", level: 70 },
        { name: "Chai", level: 70 },
    ];

    const databaseSkills = [
        { name: "MongoDB", level: 90 },
        { name: "Firebase", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Oracle", level: 70 },
    ];

    return (
        <section className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <div className="skills-grid">
                        {programmingSkills.map((skill, index) => (
                            <SkillBar
                                key={index}
                                skill={skill.name}
                                level={skill.level}
                            />
                        ))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Frameworks & Libraries</h3>
                    <div className="skills-grid">
                        {frameworkSkills.map((skill, index) => (
                            <SkillBar
                                key={index}
                                skill={skill.name}
                                level={skill.level}
                            />
                        ))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Tools & Technologies</h3>
                    <div className="skills-grid">
                        {toolSkills.map((skill, index) => (
                            <SkillBar
                                key={index}
                                skill={skill.name}
                                level={skill.level}
                            />
                        ))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Databases</h3>
                    <div className="skills-grid">
                        {databaseSkills.map((skill, index) => (
                            <SkillBar
                                key={index}
                                skill={skill.name}
                                level={skill.level}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
