import './Footer.css';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

export function Footer() {
    return (
        <footer>
            Thanks for reading!
            <br />
            Lets connect: 
            <br />
            <a href='https://www.linkedin.com/in/summerhip/' target='_blank' rel='noreferrer'>
                <FaLinkedin size='30px' />
            </a>  
            <a href='https://github.com/summerhip' target='_blank' rel='noreferrer'>
                <FaGithubSquare size='30px' />
            </a>  
            <a href='mailto: summerrshipp@gmail.com' target='_blank' rel='noreferrer'>
                <RiMailFill size='30px'/>
            </a>
            <br />
            <br />
            <img src='https://media.giphy.com/media/mP8GermRyOFWV8PQeq/giphy.gif' alt='goodbye' className='byeGif'/>
      </footer>

    );
}