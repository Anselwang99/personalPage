import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../config";

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        // Using EmailJS credentials from config file
        const { serviceId, templateId, publicKey } = emailConfig;

        // Send email
        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(handleEmailSuccess)
            .catch(handleEmailError)
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="contact-section">
            <h2>Get In Touch</h2>
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
        </section>
    );
}

export default Contact;
