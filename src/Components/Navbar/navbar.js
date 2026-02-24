import './Navbar.css'

function Navbar() {


    return (
        <div id="navbar-container">
            <div id="navbar" className="active">
                <ul className="navbar-list">
                    <li><a className="home-nav" href="#home">Home</a></li>
                    <li><a className="about-nav" href="#about">About</a></li>
                    <li><a className="projects-nav" href="#projects">Projects</a></li>
                    <li><a className="skills-nav" href="#skills">Skills</a></li>
                    <li><a className="contact-nav" href="#contact">Contact</a></li>
                </ul>    
            </div>
        </div>
    );
}
 
export default Navbar;