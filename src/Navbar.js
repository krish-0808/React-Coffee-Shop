import React from "react";

function Navbar() {
    // const handleViewHome = () => {
    //     const homeSection = document.getElementById("home");
    //     if (homeSection) {
    //         homeSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };
    // const handleViewMenu = () => {
    //     const menuSection = document.getElementById("menu");
    //     if (menuSection) {
    //         menuSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };
    // const handleViewAbout = () => {
    //     const aboutSection = document.getElementById("about");
    //     if (aboutSection) {
    //         aboutSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };
    // const handleViewContact = () => {
    //     const contactSection = document.getElementById("contact");
    //     if (contactSection) {
    //         contactSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <h1>☕ Brew & Bean</h1>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;