import './Education.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function Education() {
    return (
        <div id='education'>
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
            <h1>Education</h1>
            </ScrollAnimation>

            {/* <img src='https://www.spplus.com/wp-content/uploads/2015/08/george-mason-website.jpg' className='campus' alt='gmu campus' /> */}

            <h4>George Mason University <span class="date">January 2018 - December 2021</span></h4>
            <p>
                B.S. in computer science and a minor in math
            </p>
            <ul>
                <li>GPA: 3.67</li>
                <li>Relevant Coursework in Data Structures, Databases, Software Engineering Methodologies, Object-Oriented
            Programming, Web Development, Statistics, Operating Systems, Algorithm Analysis, Computer Graphics, Networking, Discrete Math, Linear Algebra, Differential Equations, Logic</li>
            </ul>
        </div>
    );
}