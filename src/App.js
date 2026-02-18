import './App.css';
import Navbar from './Components/Navbar/navbar.js'
import Home from './Components/HomePage/home.js'
import About from './Components/About/about.js'
import Projects from './Components/Projects/projects.js'
import Skills from './Components/Skills/skills.js'
import Contact from './Components/Contact/contact.js'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Navbar />

    </div>
  );
}

export default App;
