import './About.css';
import { FaArrowDown, FaLocationArrow, FaMailBulk } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

export function About() {
    return (
        <div id='about'>
            <div className='aboutHeader'>
                <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
                    <h1>Summer Shipp</h1>
                </ScrollAnimation>
                <p>
                    <FaLocationArrow /> Fairfax, Virginia
                    <br />
                    <FaMailBulk /> <a href='mailto: summerrshipp@gmail.com'>summerrshipp@gmail.com</a>
                    <br /><br />
                </p>
            </div>
            <img src={require('./grad.jpg')} className="myPic" alt='Graduation' />
            <div class='aboutInfo'>
                <p>
                    Hi! I am a recent college graduate with a passion for solving problems and creativity.
                    That's why software engineering is fun to me. I enjoy combining my technical back-end 
                    skills with creative front-end skills to solve problems and create user-friendly interfaces.
                    I am looking for a company to continue to learn and grow my software engineering skills at.
                    I have created this website using ReactJS to help you learn a little more  about me!
                </p>
            </div>
            <br /><br />
            <h3>
            {/* <a href='#education' className='scroll'>SCROLL!</a> */}
            <a href='#education'>
                SCROLL!
            </a>
            <br />
            <FaArrowDown />
            </h3>
        </div>
    );
}