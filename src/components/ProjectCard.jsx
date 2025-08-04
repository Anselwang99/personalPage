function ProjectCard({
    title,
    description,
    image,
    technologies = [],
    liveLink,
    sourceLink,
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
            </div>
        </div>
    );
}

export default ProjectCard;
