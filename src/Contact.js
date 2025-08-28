import react from "react";
import Navbar from "./Navbar";

import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! We'll get back to you.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
        <Navbar />
            <section id="contact" className="contact">
                <div className="container">
                    <h2>Visit Us</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="info-item">
                                <h4>📍 Location</h4>
                                <p>
                                    123 Coffee Street<br />
                                    Downtown District<br />
                                    City, State 12345
                                </p>
                            </div>
                            <div className="info-item">
                                <h4>🕒 Hours</h4>
                                <p>
                                    Monday - Friday: 6:00 AM - 8:00 PM<br />
                                    Saturday: 7:00 AM - 9:00 PM<br />
                                    Sunday: 7:00 AM - 7:00 PM
                                </p>
                            </div>
                            <div className="info-item">
                                <h4>📞 Contact</h4>
                                <p>
                                    Phone: (555) 123-4567<br />
                                    Email: hello@brewandbean.com
                                </p>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h4>Get in Touch</h4>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;