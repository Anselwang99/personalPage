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
                        I am a Software Engineer at Walmart with expertise in
                        full-stack development specializing in React, Node.js,
                        and cloud technologies. With a background in Computer
                        Engineering and Information Systems, I blend technical
                        expertise with a strong business understanding to
                        deliver impactful solutions.
                    </p>
                    <p>
                        My professional experience spans diverse domains
                        including e-commerce, healthcare technology, and
                        financial software. I excel at building scalable
                        microservices, optimizing application performance, and
                        implementing secure authentication systems. My approach
                        combines efficient code with thoughtful user experience
                        design.
                    </p>
                    <p>
                        Beyond coding, I'm passionate about data analysis and
                        machine learning, having developed sentiment analysis
                        systems and predictive models. I'm constantly exploring
                        emerging technologies and best practices to create
                        applications that are robust, maintainable, and deliver
                        exceptional value.
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
