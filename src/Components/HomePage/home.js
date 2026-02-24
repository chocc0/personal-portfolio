import './home.css'

function Home() {

    return (
        <div id="home">
            <div id="home-container">
                <img className="pfp" src="images/pfp.jpg" alt='pfp'/>
                <div className='intro'>
                    <h3>Hi, my name is</h3>
                    <h1>Mandy Sun</h1>
                    <h3>3rd Year CS Student at Emory University</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Home;