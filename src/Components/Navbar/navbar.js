import { useState, useEffect } from 'react';
import './Navbar.css'
import menu from '../../images/icons/menu.png'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // memoized statement that opens the nav-bar list
    // based on the state of the menuOpen variable

    function handleHover() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            

        </div>
    )

    /*return (
        <div id="navbar-container">
            <img src={menu} alt="menu icon" className="menu-icon" onClick={handleHover}></img>
            <div id="navbar" className={menuOpen ? "active" : "inactive"}>
                <ul className={menuOpen ? "navbar-list on":"navbar-list off"}>
                    <li><a className="home-nav" href="#home">Home</a></li>
                    <li><a className="about-nav" href="#about">About</a></li>
                    <li><a className="projects-nav" href="#projects">Projects</a></li>
                    <li><a className="skills-nav" href="#skills">Skills</a></li>
                    <li><a className="contact-nav" href="#">Contact</a></li>
                </ul>    
            </div>
        </div>
    );*/
}
 
export default Navbar;