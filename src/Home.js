import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "./Navbar";

function Home() {
    const handleViewMenu = () => {
        const menuSection = document.getElementById("menu");
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Navbar />
            <section id="home" className="hero">
                <div className="hero-content">
                    <h2>Welcome to Brew & Bean</h2>
                    <p>Join us for a cozy atmosphere, friendly service, and the perfect
                        cup of coffee to start your day or take a break.</p>

                    <p>Experience the perfect blend of flavor and comfort</p>
                    <button onClick={handleViewMenu} className="cta-button">
                        View Our Menu
                    </button>
                </div>

                <div className="hero-image">
                    <div >
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img src="/images/exterior.png"></img>
                                <Carousel.Caption>
                                    <h3>Welcome to Brew & Bean</h3>
                                    <p>Where every cup feels like home.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img src="/images/latte.png"></img>
                                <Carousel.Caption>
                                    <h3>Perfectly Crafted Coffee</h3>
                                    <p>Our baristas pour passion into every cup.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/interior.png"></img>
                                <Carousel.Caption>
                                    <h3>Warm & Cozy Ambience</h3>
                                    <p>Enjoy coffee with comfort and community.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;