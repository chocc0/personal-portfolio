import './skills.css'

function Skills() {

    const skills = {
        'Technical': [
            { name: 'HTML', logokey: 'html' },
            { name: 'CSS', logokey: 'css' },
            { name: 'JS', logokey: 'js' },
            { name: 'Java', logokey: 'java' },
            { name: 'C++', logokey: 'c++' },
            { name: 'Python', logokey: 'python' },
            { name: 'SQL', logokey: 'sql' },
        ],
        'FL': [
            { name: 'React.JS', logokey: 'react' },
            { name: 'D3', logokey: 'd3' },
            { name: 'PyTorch', logokey: 'pytorch' },
            { name: 'Arduino', logokey: 'arduino' },
            { name: 'Google Cloud', logokey: 'gcp' },
            { name: 'Postgres', logokey: 'postgres' }
        ],
        'Design': [
            { name: 'InkScape', logokey: 'inkscape' },
            { name: 'Clip Studio Paint', logokey: 'csp' },
            { name: 'Figma', logokey: 'figma' },
            { name: 'Fusion 360', logokey: 'fusion' },
            { name: 'Canva', logokey: 'canva' }
        ]
    }

    function mapSkill(s) {
        return (<div className="skill"><img src={`images/icons/` + s.logokey + '.svg'} alt="."/><p>{s.name}</p></div>)
    }
    

    return (
        <div id="skills">
            <div className="skills-container">
                <h1 className="title">Skills</h1>
                <div className="skillset">
                    <div className="skills-titles">
                        <h3>Technical:</h3>
                        <h3>Frameworks & Libraries:</h3>
                        <h3>Design:</h3>
                    </div>

                    <div className="skills-boxes">
                        <div className="skills-box">
                            {skills['Technical'].map((s) => mapSkill(s))}
                        </div>

                        <div className="skills-box">
                        {skills['FL'].map((s) => mapSkill(s))}
                        </div>

                        <div className='skills-box'>
                        {skills['Design'].map((s) => mapSkill(s))}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Skills;