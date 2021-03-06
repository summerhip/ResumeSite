import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function About() {
    return (
        <div id='about'>
            <div className='aboutHeader'>
                <h5>Hi, my name is</h5>
                {/* <h1><strong>Summer Shipp.</strong></h1> */}
                <img src={require('../Pictures/summer.png')} className='name' alt='Summer Shipp'/>
                <h2>I'm a software engineer.</h2>
            </div>
            {/* <img src={require('./grad.jpg')} className="myPic" alt='Graduation' /> */}
            <div class='aboutInfo'>
                <p>
                    I'm a recent college graduate with a passion for solving problems and creativity.
                    That's why software engineering is fun to me. I enjoy combining my technical back-end 
                    skills with my creative front-end skills to create beautiful, 
                    user-friendly interfaces. I created this website using ReactJS to help you learn a 
                    little more  about me! 
                </p>
            </div>
        </div>
    );
}