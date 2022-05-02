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
                <br />
                <strong>Languages:</strong> Python, Java, HTML, CSS, SQL, JavaScript, C, C++, LaTeX
                <br /><br />
                <strong>Tools and Frameworks:</strong> Git, Django, React, Command Line, Chrome DevTools
            </p>
        </div>
    );
}