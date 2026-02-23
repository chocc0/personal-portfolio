import { useState } from "react";
import './about.css'

function About() {

    return (
        <div id="about">
            <div className="about-container">
                <h1 className="title">About</h1>
                <ul className="about-list">
                    <li><p>I'm a 3rd year CS student at Emory University interested in HCI, UI/UX design, and software development.</p></li>
                    <li><p>In 2025, I conducted research in <span>computer vision</span> and <span>artifical intelligence</span> in robotics at Mississippi State University.</p></li>
                    <li><p>Currently, I work in the Embodied Interaction Lab (EMBI Lab) under Dr. Kristin Williams studying <span>craft-based user interfaces</span> and <span>sustainable HCI</span>.</p></li>
                </ul>
            </div>
        </div>

    )
}

export default About;