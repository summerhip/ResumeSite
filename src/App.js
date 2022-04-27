import './App.css';
import { NavBar } from './NavBar.js';
import { About }  from './About.js';
import { Education } from './Education.js';
import { Experience } from './Experience.js';
import { Skills } from './Skills.js';
import { Projects } from './Projects.js';

//form somewhere??
//linkedin link
//upload to github
//include samples of projs???

function App() {
  return (
    <div className="App">
      <head>
          <title>Summer Shipp Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link href="style.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </head>
      <body>

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

    </body>

    </div>
  );
}

export default App;
