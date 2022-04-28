import React from 'react';
import './NavBar.css';

export function NavBar() {
    return (
        <ul className='navigation'>
            <li><a href='#about'>About</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
        </ul>
    );
}