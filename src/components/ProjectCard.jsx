function ProjectCard({
    title,
    description,
    image,
    technologies = [],
    liveLink,
    sourceLink,
    sourceCodeLinks,
}) {
    return (
        <div className="project-card">
            <div
                className="project-image"
                style={{ backgroundImage: image ? `url(${image})` : "none" }}
            ></div>
            <h3>{title}</h3>
            <p>{description}</p>

            {technologies && technologies.length > 0 && (
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            <div className="project-links">
                {liveLink && (
                    <a
                        href={liveLink}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live
                    </a>
                )}
                {sourceLink && (
                    <a
                        href={sourceLink}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source Code
                    </a>
                )}
                {sourceCodeLinks && (
                    <div className="multiple-source-links">
                        {sourceCodeLinks.react && (
                            <a
                                href={sourceCodeLinks.react}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                React Repo
                            </a>
                        )}
                        {sourceCodeLinks.express && (
                            <a
                                href={sourceCodeLinks.express}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Express Repo
                            </a>
                        )}
                        {sourceCodeLinks.angular && (
                            <a
                                href={sourceCodeLinks.angular}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Angular Repo
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
