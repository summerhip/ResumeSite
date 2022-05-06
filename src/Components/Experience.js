import './Experience.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function Experience() {
    return (
        <div id='experience'>
          <br />
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
              <h1>Experience</h1>
            </ScrollAnimation>
            <h4>George Mason University Tutoring Center <span class="date">January 2018 - January 2020</span></h4>
            <p>Tutored peers in Programming, Linear Algebra, Calculus I, II, and III</p>
            <ul>
              <li>Motivated struggling students with my effective communication and used problem solving skills to teach complex concepts</li>
            </ul>
            <br/><br /><hr /><br />
            <h4>By Shear Design Salon and Spa <span class="date">April 2018 - Present</span></h4>
            <p>Part-Time Front Desk Receptionist and Shampoo Technician</p>
            <ul>
              <li>Provided customer oversight, enabled prompt service, and ensured client satisfaction</li>
            </ul>
        </div>
    );
}