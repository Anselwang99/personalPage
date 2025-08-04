function Hero({ setActivePage }) {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>
                    Hello, I'm{" "}
                    <span className="highlight">Zhanglu (Ansel) Wang</span>
                </h1>
                <h2>Software Engineer</h2>
                <p>
                    Based in Sunnyvale, CA. I specialize in building robust
                    backend services and fullstack web applications with modern
                    technologies.
                </p>
                <div className="hero-buttons">
                    <button
                        className="cta-button primary-btn"
                        onClick={() => setActivePage("contact")}
                    >
                        Get in Touch
                    </button>
                    <button
                        className="cta-button secondary-btn"
                        onClick={() => setActivePage("projects")}
                    >
                        View My Work
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
