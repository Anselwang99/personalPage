import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailConfig, setEmailConfig] = useState({
        serviceId: "",
        templateId: "",
        publicKey: "",
    });

    // Load config dynamically
    useEffect(() => {
        async function loadConfig() {
            try {
                const config = await import("../config.js");
                setEmailConfig(config.emailConfig);
            } catch {
                console.warn("Main config not found, trying fallback...");
                try {
                    const fallbackConfig = await import(
                        "../config.fallback.js"
                    );
                    setEmailConfig(fallbackConfig.emailConfig);
                } catch (fallbackError) {
                    console.error("Failed to load any config:", fallbackError);
                }
            }
        }

        loadConfig();
    }, []);

    const handleEmailSuccess = (result) => {
        console.log("Email sent successfully:", result.text);
        setFormStatus("success");
        setFormData({ user_name: "", user_email: "", message: "" });
    };

    const handleEmailError = (error) => {
        console.error("Failed to send email:", error);
        setFormStatus("error");
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);

        // Get EmailJS credentials (from config or fallback to env variables)
        const serviceId =
            emailConfig.serviceId || import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId =
            emailConfig.templateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey =
            emailConfig.publicKey || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Send email (only if we have credentials)
        if (serviceId && templateId && publicKey) {
            emailjs
                .sendForm(serviceId, templateId, form.current, publicKey)
                .then(handleEmailSuccess)
                .catch(handleEmailError)
                .finally(() => {
                    setIsSubmitting(false);
                });
        } else {
            console.error("Missing EmailJS credentials");
            handleEmailError(new Error("Missing EmailJS credentials"));
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-section">
            <h2>Get In Touch</h2>
            <div className="section-container">
                <div className="contact-content">
                    <div className="contact-form">
                        {formStatus === "success" && (
                            <div className="form-status success">
                                Message sent successfully!
                            </div>
                        )}
                        {formStatus === "error" && (
                            <div className="form-status error">
                                Failed to send message. Please try again later.
                            </div>
                        )}
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="user_name">Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder="Your Name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_email">Email</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fa fa-envelope icon"></i>
                            <a
                                href="mailto:Anselwang9948@gmail.com"
                                className="contact-link"
                            >
                                Anselwang9948@gmail.com
                            </a>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-phone icon"></i>
                            <p>(951) 816-7191</p>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-map-marker icon"></i>
                            <p>Sunnyvale, CA</p>
                        </div>
                        <div className="social-contact">
                            <h3>Find me on</h3>
                            <div className="social-icons">
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
