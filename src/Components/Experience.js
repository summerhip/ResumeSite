import './Experience.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function Experience() {
    return (
        <div id='experience'>
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
              <h1>Experience</h1>
            </ScrollAnimation>
            <h4>George Mason University Tutoring Center <span class="date">January 2018 - January 2020</span></h4>
            <p>Tutored peers in Programming, Linear Algebra, Calculus I, II, and III</p>
            <ul>
              <li>Learned strong communication skills and how to explain complex concepts to peers</li>
            </ul>
        </div>
    );
}