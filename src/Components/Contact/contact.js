import './contact.css'

function Contact() {
    return(
        <div id="contact">
            <div className="contact-container">
                <h1>Contact Me:</h1>
                <div className="contact-info">
                    <div className="info">
                        <img src="/images/icons/mail.svg" alt="mail icon"/><p>mandysun453@gmail.com</p>
                    </div>
                    <div className="info">
                        <a href="https://www.linkedin.com/in/mandy-sun-28149224a/"><img src='/images/icons/Linkedin.svg' alt="linkedin icon"/><p>Let's Connect!</p></a>
                    </div>
                    <div className="info">
                        <a href="https://github.com/chocc0"><img src='/images/icons/Github.svg' alt="github icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Contact;