import './App.css';
import { NavBar } from './Components/NavBar.js';
import { About }  from './Components/About.js';
import { Education } from './Components/Education.js';
import { Experience } from './Components/Experience.js';
import { Skills } from './Components/Skills.js';
import { Projects } from './Components/Projects.js';
import { FaLinkedin } from 'react-icons/fa';

//form somewhere??
//linkedin link
//include samples of projs???
//smooth scroll????


function App() {

  return (
    <div className="App">

      <NavBar />

      <div className='content'>

        <About />
        
        <hr />

        <Education />

        <hr />

        <Experience />

        <hr />

        <Skills />

        <hr />

        <Projects />
      
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
