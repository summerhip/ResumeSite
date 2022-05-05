import React, { useState } from 'react';
import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';

export function NavBar() {
    const  [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }

    return (
        <div>
            <a href='' className='logo'>SuMmEr</a>
            <ul className='navigation'>
                <div className='burger'>
                    <button onClick={toggleBurger}><GiHamburgerMenu size='25px'/></button>
                    <div className={`burgerNav ${burgerOpen ? ' showMenu' : ''}`}>
                        <br /><br />
                        <li ><Link smooth to='#top' onClick={toggleBurger}>About</Link></li>
                        <br />
                        <li ><Link smooth to='#education' onClick={toggleBurger}>Education</Link></li>
                        <br />
                        <li ><Link smooth to='#experience' onClick={toggleBurger}>Experience</Link></li>
                        <br />
                        <li ><Link smooth to='#skills' onClick={toggleBurger}>Skills</Link></li>
                        <br />
                        <li ><Link smooth to='#projects' onClick={toggleBurger}>Projects</Link></li>
                    </div>
                </div>
                <div className='regMenu'>
                    <li ><Link smooth to='#projects'>Projects</Link></li>
                    <li ><Link smooth to='#skills'>Skills</Link></li>
                    <li ><Link smooth to='#experience'>Experience</Link></li>
                    <li ><Link smooth to='#education'>Education</Link></li>
                    <li ><Link smooth to='#top'>About</Link></li>
                </div>
            </ul>
        </div>
    );
}