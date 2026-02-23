import './contact.css'
import { useState } from 'react'

function Contact() {    
    return(
        <div id="contact">
            <div className="contact-container">
                <h1>Contact Me:</h1>
                <div className='content'>
                    <div className="contact-info">
                        <div className="info">
                            <img src="/images/icons/mail.svg" alt="mail icon" title="Email: mandysun453@gmail.com" onClick={() => {this.Copy()}}/><p>mandysun453@gmail.com</p>
                        </div>
                        <div className='info'>
                            <a className="info" href="https://www.linkedin.com/in/mandy-sun-28149224a/"><img src='/images/icons/LinkedIn.svg' alt="linkedin icon" title="LinkedIn"/></a>
                            <a className="info" href="https://github.com/chocc0"><img src='/images/icons/Github.svg' alt="github icon" title="Github"/></a>
                            <a className="info" href="/Resume_Mandy_Sun.pdf" target='_blank'><img src="/images/icons/resume.svg" alt="resume icon" title="Resume"></img></a>
                        </div>
                    </div>
                    <div className="signoff">
                        <p>Drafted in Figma, designed in VSCode, and programmed with React.JS and CSS!</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Contact;