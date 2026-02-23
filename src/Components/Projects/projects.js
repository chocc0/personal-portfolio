import './projects.css'
import {useState} from 'react'

function Projects() {
    const [tlInfo, setTlInfo] = useState('cs_tl')

    const cs_tl = [
        { date: 'Current', title: 'Hackathon Participant App', description: 'Serve as project manager for IOS application for Emory Hacks hackathon.' },
        { date: 'Current', title: 'HCI Craft-User Interface', description: 'Research craft-based user-interfaces to encourage upcycling and handmade craft interfaces.' },
        { date: 'Jan 2026', title: 'Personal Website', description: 'Built first portfolio with React and CSS. Designed in Figma, created with VSCode and Github.' },
        { date: 'May-Aug 2025', title: 'Computer Vision Robotics Research', description: 'Conducted research on segmentation models and vision-language navigation (VLN) for developing Vision Language Maps under Dr. Jingdao Chen. Evaluated Segment Anything Model (SAM), Grounded SAM, and the You Only Look Once (YOLO) models for speed, accuracy, and cybersecurity performance.' },
    ];

    const ec_tl = [
        { date: 'Current', title: 'Emory Hacks Director', description: 'Co-founder and Senior Hackathon Director of the first computer science hackathon at Emory University. Developed a comprehensive, systematic roadmap for fundraising, social media marketing, and outreach with industry leaders in technology and business. Increase hackathon funding by 30% by securing $10k from various sponsors' },
        { date: 'Current', title: 'Crochet@Emory Treasurer', description: 'Manage club funds, keep extensive account records, optimize club expenditures to adhere to budgets, and effectively increase club’s funding during monthly cycles'}
    ];

    function Timeline() {
        let tl = ''
        tlInfo === "cs_tl" ? tl = cs_tl: tl = ec_tl
        console.log("run")
        return (<div>{
            tl.map((it, idx) => (
            <div className="timeline-item" key={idx}>
                <div className="timeline-notch" />
                <div className="timeline-content">
                    <span className="timeline-date">{it.date}</span>
                    <h3 className="timeline-title">{it.title}</h3>
                    <p className="timeline-desc">{it.description}</p>
                </div>
            </div>
        ))}</div>)
    }


    return (
        <div id="projects">
            <h1>Experience</h1>
            <div className="project-types">
                <button className="cs-btn" onClick={()=>{setTlInfo("cs_tl")}}>Computer Science</button>
                <button className="ec-btn" onClick={()=>{setTlInfo("ec_tl")}}>Extracurricular</button>
            </div>
            <div className="timeline">
                <Timeline />
            </div>
        </div>
    )
}

export default Projects;