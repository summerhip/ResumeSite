import './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';

export function Projects() {
    return (
        <div id='projects'>
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
              <h1>Projects</h1>
            </ScrollAnimation>

            {/* <img src={require('../QSscreen.png')} className='projPic' alt='quickshare screenshot'/> */}
            <a href='https://docs.google.com/document/d/1WZ_1q-5pGW6l4CO-I_R3567WF7Vlp10Cok3qDWh5FW0/edit' target='_blank' rel="noreferrer">
              <div className='projBlock'>
                <h4>Designed a Screen Sharing Web Application Using Django, Python, and HTML</h4>
                <ul>
                  <li>Simple, quick, and easy application that allows users to share their screen with friends</li>
                  <li>Focuses on simplicity and ease of use when compared to similar applications</li>
                  <li>Worked in a group of 3</li>
                </ul>
              </div>
            </a>

            <a href='https://github.com/gildir/CS310_p4_Fall19' target='_blank' rel="noreferrer" >
              <div className='projBlock right'>
                <h4>Implemented Network Simulator Using Java</h4>
                <ul>
                  <li>Implemented a directed graph class using an adjacency list to support a network structure</li>
                  <li>Implemented a hash table class to support network routing and Djikstra's Algorithm</li>
                  <li>Used algorithm analysis to create a 100 node graph with 25% connection probability in under one minute</li>
                </ul>
              </div>
            </a>
            {/* <img src='https://raw.githubusercontent.com/gildir/CS310_p4_Fall19/master/docs/animated.gif' className='projPic' alt='sim screenshot'/> */}

            {/* <img src={require('../ERsql.png')} className='projPic' alt='ER screenshot'/> */}
            <a href = 'https://docs.google.com/document/d/1lHP_GJfNUFH0I57UO-pPDuVeDBqLOavWpPGDlaMqaXk/edit?usp=sharing' target='_blank' rel="noreferrer">
              <div className='projBlock'>
                <h4>Designed a Streaming Service Database using SQL</h4>
                <ul>
                    <li>Created ER diagram based on given limited constraints and personal assumptions</li>
                    <li>Converted to relational schema</li>
                    <li>Created database using SQL</li>
                    <li>Constructed complex queries using SQL</li>
                    <li>Entities such as: members, profiles, movies, genres, and actors</li>
                </ul>
              </div>
            </a>

            <a href='https://github.com/yig/graphics101-airbrush' target='_blank' rel='noreferrer'>
              <div className='projBlock right'>
                <h4>Implemented a Digital Painting Tool Using C++</h4>
                <ul>
                  <li>Created a translucent RGBA image for the spray of an airbrush using geometric equations</li>
                  <li>Deposits paint by compositing the airbrush RGBA onto the background centered at the mouse</li>
                </ul>
              </div>
            </a>
            {/* <img src='https://raw.githubusercontent.com/yig/graphics101-airbrush/master/docs/images/beach.png' className='projPic' alt='paint screenshot' /> */}
          </div>
    );
}