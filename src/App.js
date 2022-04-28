import './App.css';
import { NavBar } from './Components/NavBar.js';
import { About }  from './Components/About.js';
import { Education } from './Components/Education.js';
import { Experience } from './Components/Experience.js';
import { Skills } from './Components/Skills.js';
import { Projects } from './Components/Projects.js';
import { FaLinkedin } from 'react-icons/fa';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';



function App() {

  return (
    <div className="App">

      <NavBar />

      <div className='content'>

        <ParallaxProvider>
          <Parallax scale={[1.0, 0.5, 'easeInQuad']}>
            <About />
          </Parallax>

          <Parallax scale={[1.0, 0.5, 'easeInQuad']}>
            <Education />
          </Parallax>

          <Parallax scale={[1.0, 0.5, 'easeInQuad']} >
            <Experience />
          </Parallax>

          <Parallax scale={[1.0, 0.5, 'easeInQuad']} >
            <Skills />
          </Parallax>

          <Parallax scale={[1.0, 0.5, 'easeInQuad']} >
            <Projects />
          </Parallax>
        </ParallaxProvider>
      
      </div>

      <footer>
        Thanks for reading!
        <br />
        Lets connect: 
        <br />
        <a href='https://www.linkedin.com/in/summerhip/'>
            <FaLinkedin size='25px'/>
        </a>
      </footer>
    </div>
  );
}

export default App;
