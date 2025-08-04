function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>
                    &copy; {new Date().getFullYear()} Zhanglu (Ansel) Wang. All
                    Rights Reserved.
                </p>
                <div className="social-links">
                    <a
                        href="https://github.com/Anselwang99"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anselw/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
