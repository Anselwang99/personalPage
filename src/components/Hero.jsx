function Hero({ setActivePage }) {
    return (
        <section className="hero-section">
            <div className="section-container">
                <div className="hero-content">
                    <h1>
                        Hello, I'm{" "}
                        <span className="highlight">Zhanglu (Ansel) Wang</span>
                    </h1>
                    <h2>Software Engineer</h2>
                    <p>
                        Based in Sunnyvale, CA. I specialize in designing and
                        developing scalable full-stack applications with React,
                        Node.js and cloud technologies. Passionate about
                        creating impactful digital experiences through elegant
                        code.
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
            </div>
        </section>
    );
}

export default Hero;
