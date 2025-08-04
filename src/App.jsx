import { useState, useEffect } from "react";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    const [activePage, setActivePage] = useState("home");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add a small delay to simulate content loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`app-container ${isLoading ? "loading" : "loaded"}`}>
            {isLoading ? (
                <div className="loader">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <header>
                        <Navbar
                            activePage={activePage}
                            setActivePage={setActivePage}
                        />
                    </header>

                    <main>
                        {activePage === "home" && (
                            <Hero setActivePage={setActivePage} />
                        )}
                        {activePage === "about" && <About />}
                        {activePage === "experience" && <Experience />}
                        {activePage === "skills" && <Skills />}
                        {activePage === "projects" && <Projects />}
                        {activePage === "contact" && <Contact />}
                    </main>

                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
