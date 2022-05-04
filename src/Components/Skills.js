import './Skills.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function Skills() {
    return (
        <div id='skills'>
             {/* make into table instead of list to take up more space and style nicely */}
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
              <h1>Skills</h1>
            </ScrollAnimation>
            <p>
                <h4>Languages:</h4> Python, Java, HTML, CSS, SQL, JavaScript, C, C++, LaTeX
                <br /><br /><hr />
                <h4>Tools and Frameworks:</h4> Git, Django, React, Command Line, DevTools
            </p>
        </div>
    );
}