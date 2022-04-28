import './About.css';
import { FaLocationArrow, FaMailBulk } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

export function About() {
    return (
        <div id='about'>
            <div className='aboutHeader'>
                <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
                    <h1>Summer Shipp</h1>
                </ScrollAnimation>
                <p className='locEmail'>
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
                    I am looking for a company to continue to grow my software engineering skills at. I have 
                    created this website using ReactJS to help you learn a little more  about me!
                </p>
            </div>
        </div>
    );
}