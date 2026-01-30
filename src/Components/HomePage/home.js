import './home.css'

function Home() {
    return (
        <div id="home">
            <div id="home-container">
                <img className="pfp" src='/logo512.png' alt='profile picture'/>
                <div className='intro'>
                    <h3>Hello my name is</h3>
                    <h1>Mandy Sun</h1>
                    <h3>3rd Year CS Student at Emory University</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Home;