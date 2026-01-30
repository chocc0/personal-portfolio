import { useState, useEffect } from "react";
import './projects.css'

function Projects() {
    const [openTech, setOpenTech] = useState(false);
    const [openLeader, setOpenLeader] = useState(false);
    const [openDesign, setOpenDesign] = useState(false);

    function Folder({projectType, name, handleClick}) {
        return (
            <section className={projectType}>
                <button onClick={handleClick}>{name}</button>
            </section>
        );
    }

    useEffect(() => {
          console.log(openTech)
    }, [openTech]);

    return (
        <div id="projects">
            <div className="projects-container">
                <h1 className="title">Projects</h1>
                <Folder projectType="project-folder technical" name="Technical Projects" handleClick={() => setOpenTech(!openTech)}/>
                <Folder projectType="project-folder leadership" name="Leadership Experiences" handleClick={() => setOpenLeader(!openLeader)}/>
                <Folder projectType="project-folder design" name="Graphic Design" handleClick={() => setOpenDesign(!openDesign)}/>
            </div>

            {openTech && <div className="project-page technical-page" aria-hidden={openTech? true: false}>
                <div>
                    <div className="project-header"><h1>Technical Projects</h1><button onClick={() => setOpenTech(!openTech)}>X</button></div>
                    <h3>Project 1</h3>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                    <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                    <h3>Project 2</h3>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                    <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                    <h3>Project 3</h3>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                    <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                </div>
            </div>}
        </div>

    )
}

export default Projects;