import './Footer.css';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export function Footer() {
    return (
        <footer>
            Thanks for reading!
            <br />
            Lets connect: 
            <br />
            <a href='https://www.linkedin.com/in/summerhip/'>
                <FaLinkedin size='25px' />
            </a>
            <a href='https://github.com/summerhip'>
               <FaGithubSquare size='25px' />
            </a>
      </footer>

      /*  <p className='locEmail'>
                    <FaLocationArrow /> Fairfax, Virginia
                    <br />
                    <FaMailBulk /> <a href='mailto: summerrshipp@gmail.com'>summerrshipp@gmail.com</a>
                    <br /><br />
                </p> */

    );
}