import React from 'react';
import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';

export function NavBar() {
    return (
        <ul className='navigation'>
            <li><Link smooth to='#top'>About</Link></li>
            <li><Link smooth to='#education'>Education</Link></li>
            <li><Link smooth to='#experience'>Experience</Link></li>
            <li><Link smooth to='#skills'>Skills</Link></li>
            <li><Link smooth to='#projects'>Projects</Link></li>
        </ul>
    );
}