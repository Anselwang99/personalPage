import nyuLogo from "../assets/pics/nyu.jpg";
import ucsbLogo from "../assets/pics/ucsb.png";

function About() {
    const education = [
        {
            school: "New York University",
            degree: "MS in Information Systems",
            period: "Sept 2021 – May 2023",
            logo: nyuLogo,
        },
        {
            school: "UC Santa Barbara",
            degree: "BS in Computer Engineering",
            period: "Sept 2017 – Jun 2021",
            logo: ucsbLogo,
        },
    ];

    return (
        <section className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a Software Engineer based in Sunnyvale, CA with
                        expertise in full-stack development. I enjoy building
                        robust applications with modern technologies, turning
                        complex problems into simple, beautiful and intuitive
                        solutions.
                    </p>
                    <p>
                        With a strong foundation in both frontend and backend
                        development, I bring technical expertise and creative
                        problem-solving to every project I work on. My goal is
                        to create applications that are not only functional but
                        also provide an exceptional user experience.
                    </p>

                    <div className="education-section">
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <div className="education-header">
                                    <img
                                        src={edu.logo}
                                        alt={`${edu.school} logo`}
                                        className="education-logo"
                                    />
                                    <h4>{edu.school}</h4>
                                </div>
                                <p>{edu.degree}</p>
                                <p className="education-period">{edu.period}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
