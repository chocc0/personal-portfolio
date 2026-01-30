import './App.css';
import Navbar from './Components/Navbar/navbar.js'
import Home from './Components/HomePage/home.js'
import About from './Components/About/about.js'
import Projects from './Components/Projects/projects.js'
import Skills from './Components/Skills/skills.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
