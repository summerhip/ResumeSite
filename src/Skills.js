import './Skills.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function Skills() {
    return (
        <div id='skills'>
             {/* make into table instead of list to take up more space and style nicely */}
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
              <h2>Skills</h2>
            </ScrollAnimation>
            <p>
                <strong>Languages:</strong>C, C++, Python, Java, HTML, CSS, LaTeX, SQL, JavaScript
                <br /><br />
                <strong>Frameworks:</strong> Git, Django, React
            </p>
        </div>
    );
}