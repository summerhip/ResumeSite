import './Experience.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function Experience() {
    return (
        <div id='experience'>
          <br />
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
              <h1>Experience</h1>
            </ScrollAnimation>
            <h4>SAS <span class="date">August 2022 - </span></h4>
            <p>Associate Software Developer</p>
            <ul>
              <li>Design and develop both HTML5 applications and Java based mid-tiers and services that communicate with, and take advantage of, SAS analytics</li>
              <li>Write new and revised UI or server-side application code</li>
              <li>Perform development-level testing and writing unit tests</li>
              <li>Document API's and programming guidelines</li>
            </ul>
            <br/><br /><hr /><br />
            <h4>Intact Technology <span class="date">May 2022 - August 2022</span></h4>
            <p>Intern</p>
            <ul>
              <li>Assisted with Learning and Development platform UI design using GoMo and Bridge LMS</li>
              <li>Learned and developed knowledge about the ServiceNow platform</li>
              <li>Developed and configured applications using HTML and JavaScript in ServiceNow</li>
              <li>Developed and configured application reports, dashboards, flows, and processes in ServiceNow</li>
            </ul>
            <br/><br /><hr /><br />
            <h4>By Shear Design Salon and Spa <span class="date">April 2018 - May 2022</span></h4>
            <p>Part-Time Front Desk Receptionist and Shampoo Technician</p>
            <ul>
              <li>Provided customer oversight, enabled prompt service, and ensured client satisfaction</li>
            </ul>
            <br/><br /><hr /><br />
            <h4>George Mason University Tutoring Center <span class="date">January 2018 - January 2020</span></h4>
            <p>Tutored peers in Programming, Linear Algebra, Calculus I, II, and III</p>
            <ul>
              <li>Motivated struggling students with my effective communication and used problem solving skills to teach complex concepts</li>
            </ul>
        </div>
    );
}