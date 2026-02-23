import './home.css'

function Home() {

    console.log(process.env.PUBLIC_URL);

    return (
        <div id="home">
            <div id="home-container">
                <img className="pfp" src={`${process.env.PUBLIC_URL}images/pfp.jpg`} alt='pfp'/>
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