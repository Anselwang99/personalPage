import { useState, useEffect } from "react";

function Navbar({ activePage, setActivePage }) {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <span>Zhanglu (Ansel) Wang</span>
            </div>
            <ul className="nav-links">
                <li
                    onClick={() => setActivePage("home")}
                    className={activePage === "home" ? "active" : ""}
                >
                    Home
                </li>
                <li
                    onClick={() => setActivePage("about")}
                    className={activePage === "about" ? "active" : ""}
                >
                    About
                </li>
                <li
                    onClick={() => setActivePage("experience")}
                    className={activePage === "experience" ? "active" : ""}
                >
                    Experience
                </li>
                <li
                    onClick={() => setActivePage("skills")}
                    className={activePage === "skills" ? "active" : ""}
                >
                    Skills
                </li>
                <li
                    onClick={() => setActivePage("projects")}
                    className={activePage === "projects" ? "active" : ""}
                >
                    Projects
                </li>
                <li
                    onClick={() => setActivePage("contact")}
                    className={activePage === "contact" ? "active" : ""}
                >
                    Contact
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
