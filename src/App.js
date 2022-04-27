import './App.css';
import { NavBar } from './NavBar.js';
import { About }  from './About.js';
import { Education } from './Education.js';
import { Experience } from './Experience.js';
import { Skills } from './Skills.js';
import { Projects } from './Projects.js';

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

        <hr />
      
      </div>

      <footer>Thank you for reading!</footer>

    </div>
  );
}

export default App;
