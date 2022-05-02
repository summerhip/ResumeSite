import './App.css';
import { NavBar } from './Components/NavBar.js';
import { About }  from './Components/About.js';
import { Education } from './Components/Education.js';
import { Experience } from './Components/Experience.js';
import { Skills } from './Components/Skills.js';
import { Projects } from './Components/Projects.js';
import { Footer } from './Components/Footer.js';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { FaMailBulk } from 'react-icons/fa';

//add logo to navbar
//add emain vertically sticky to right


function App() {

  return (
    <div className="App">

      <NavBar />
{/*       <div className='vertical'>
        <a href='mailto: summerrshipp@gmail.com'><FaMailBulk size='25px'/>summerrshipp@gmail.com</a>
      </div> */}

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

    <Footer />

    </div>
  );
}

export default App;
