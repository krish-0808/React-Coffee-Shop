import react from "react";

function About() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Brew & Bean</h2>
                            <p>
                                Founded in 2015, Brew & Bean has been serving the community with exceptional coffee and warm hospitality.
                                We source our beans from sustainable farms around the world and roast them fresh daily to ensure the
                                perfect cup every time.
                            </p>
                            <p>
                                Our cozy atmosphere and friendly staff make us the perfect place to start your morning, meet with friends,
                                or find a quiet corner to work. We believe that great coffee brings people together.
                            </p>
                            <div className="features">
                                <div className="feature">
                                    <h4>🌱 Sustainable Sourcing</h4>
                                    <p>Ethically sourced beans from partner farms</p>
                                </div>
                                <div className="feature">
                                    <h4>🔥 Fresh Roasted</h4>
                                    <p>Roasted daily in small batches</p>
                                </div>
                                <div className="feature">
                                    <h4>👥 Community Focused</h4>
                                    <p>Supporting local artists and events</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="/images/about.png" alt="Coffee roasting" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;