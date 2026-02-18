import { useState, useEffect } from "react";
import './projects.css'

function Projects() {
    const [openTech, setOpenTech] = useState(false);
    const [openLeader, setOpenLeader] = useState(false);
    const [openDesign, setOpenDesign] = useState(false);
    const [openPage, setOpenPage] = useState(false);


    function Folder({projectType, name, handleClick}) {
        return (
            <div className={projectType}>
                <button onClick={handleClick}><h3>{name}</h3></button>
                <div classNam="front"></div>
            </div>
        );
    }

    useEffect(() => {
        setOpenPage((openTech || openLeader || openDesign));
    }, [openTech, openLeader, openDesign]);

    return (
        <div id="projects">
            <div className = {"projects-home" + (openPage ? " hidden":" vis")}>
                <h1 className="title">Projects</h1>
                <div className="folder-container">
                    <Folder projectType="project-folder technical" name="Technical Projects" handleClick={() => setOpenTech(!openTech)}/>
                    <Folder projectType="project-folder leadership" name="Leadership Experiences" handleClick={() => setOpenLeader(!openLeader)}/>
                    <Folder projectType="project-folder design" name="Graphic Design" handleClick={() => setOpenDesign(!openDesign)}/>
                </div>
            </div>

            {openTech && <div className={"project-page tech-page "  + (openTech ? "vis":"hidden")} aria-hidden={openTech? true: false}>
                <div className="project-header"><h1>Technical Projects</h1><button className="exit-button" onClick={() => setOpenTech(!openTech)}>X</button></div>
                <h3>Project 1</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                <h3>Project 2</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                <h3>Project 3</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
            </div>}

            {openLeader && <div className={"project-page leader-page "  + (openLeader ? "vis":"hidden")} aria-hidden={openLeader? true: false}>
                <div className="project-header"><h1>Leadership Experiences</h1><button className="exit-button" onClick={() => setOpenLeader(!openLeader)}>X</button></div>
                <h3>Project 1</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                <h3>Project 2</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                <h3>Project 3</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
            </div>}

            {openDesign && <div className={"project-page design-page "  + (openDesign ? "vis":"hidden")} aria-hidden={openDesign? true: false}>
                <div className="project-header"><h1>Graphic Design Projects</h1><button className="exit-button" onClick={() => setOpenDesign(!openDesign)}>X</button></div>
                <h3>Project 1</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                <h3>Project 2</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                <h3>Project 3</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
            </div>}
        </div>

    )
}

export default Projects;