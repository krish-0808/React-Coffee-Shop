import react from "react";
import Navbar from "./Navbar";

function Footer() {
    return (
        <>
        <Navbar />
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4>☕ Brew & Bean</h4>
                            <p>Crafting perfect coffee experiences since 2015</p>
                        </div>
                        <div className="footer-section">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#" >
                                    Facebook
                                </a>
                                <a href="#" >
                                    Instagram
                                </a>
                                <a href="#" >
                                    Twitter
                                </a>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <a
                                        href="#menu"
                                        
                                    >
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 Brew & Bean. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;