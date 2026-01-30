import { useState } from "react";
import './about.css'

function About() {

    return (
        <div id="about">
            <div className="about-container">
                <h1 className="title">About</h1>
                <ul className="about-list">
                    <li>My name is Mandy Sun, and I am a 3rd year CS student at Emory University!</li>
                    <li>I'm interested in HCI, UI/UX design, and software development.</li>
                    <li>I previously studied <span>computer vision</span> and <span>artifical intelligence</span> in robotics at Mississippi State University.</li>
                    <li>Currently, I work in the Embodied Interaction Lab (EMBI Lab) under Dr. Kristin Williams studying HCI and sustainable computing.</li>
                </ul>
            </div>
        </div>

    )
}

export default About;