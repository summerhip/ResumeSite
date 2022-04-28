import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';

export function Footer() {
    return (
        <footer>
            Thanks for reading!
            <br />
            Lets connect: 
            <br />
            <a href='https://www.linkedin.com/in/summerhip/'>
                <FaLinkedin size='25px'/>
            </a>
      </footer>
    );
}