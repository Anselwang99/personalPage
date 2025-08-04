import { useEffect, useRef, useState } from "react";

function SkillBar({ skill, level }) {
    const [animate, setAnimate] = useState(false);
    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = skillRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="skill-item" ref={skillRef}>
            <div className="skill-name">{skill}</div>
            <div className="skill-bar">
                <div
                    className="skill-level"
                    style={{ width: animate ? `${level}%` : "0%" }}
                ></div>
            </div>
        </div>
    );
}

export default SkillBar;
