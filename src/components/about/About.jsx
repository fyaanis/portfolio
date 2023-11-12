import React from "react";
import "./about.css";
import me from "../../assets/me.jpg";

import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about_container container grid">
                <img src={me} alt="" className="me" />
                <div className="about_data">
                    <Info />

                    <p className="about_description">
                    I am an undergraduate student majoring in Computer Science Education.
                    As an undergraduate student majoring in Computer Science Education, 
                    I am passionately committed to the field of computer science and the art of teaching.
                    With a strong foundation in both computer science concepts and educational pedagogy, 
                    I am dedicated to inspiring the next generation of computer scientists and technology enthusiasts.
                    </p>

                </div>
            </div>
        </section>
    );
}

export default About