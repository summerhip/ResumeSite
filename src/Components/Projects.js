import './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { HiCursorClick } from 'react-icons/hi';

export function Projects() {
    return (
        <div id='projects'>
            <ScrollAnimation animateIn='bounce' initiallyVisible={true} >
              <h1>Projects</h1>
            </ScrollAnimation>

            <div className='projContainer'>
              <a href='https://docs.google.com/document/d/1WZ_1q-5pGW6l4CO-I_R3567WF7Vlp10Cok3qDWh5FW0/edit' target='_blank' rel="noreferrer">
                <div className='projBlock'>
                  <h4>Designed a Screen Sharing Web Application Using Django, Python, and HTML</h4>
                  Worked in a group of 3 to develop a simple, quick, and easy application that allows users to share their screen with friends
                  It focuses on simplicity and ease of use when compared to similar applications.
                  <br /> <HiCursorClick className='clickMe'/>
                </div>
              </a>
              <img src={require('../Pictures/QSscreen.png')} className='projPic right' alt='quickshare screenshot'/>
            </div>

            <div className='projContainer'>
              <a href='https://github.com/gildir/CS310_p4_Fall19' target='_blank' rel="noreferrer" >
                <div className='projBlock right'>
                  <h4>Implemented Network Simulator Using Java</h4>
                    I implemented a directed graph class using an adjacency list to support a network structure.
                    Then I implemented a hash table class to support both network routing and Djikstra's Algorithm. 
                    I used the Java Universal Network/Graph Framework for graphics.
                    While working on these components I used algorithm analysis to make my program efficient. 
                    We had to create a 100 node graph with 25% connection probability in under one minute.
                    <br /> <HiCursorClick className='clickMe'/>
                </div>
              </a>
              <img src='https://raw.githubusercontent.com/gildir/CS310_p4_Fall19/master/docs/animated.gif' className='projPic' alt='sim screenshot'/>
            </div>

            <div className='projContainer'>
              <a href = 'https://docs.google.com/document/d/1lHP_GJfNUFH0I57UO-pPDuVeDBqLOavWpPGDlaMqaXk/edit?usp=sharing' target='_blank' rel="noreferrer">
                <div className='projBlock'>
                    <h4>Designed a Streaming Service Database using SQL</h4>
                      I created ER diagram based on given limited constraints and personal assumptions
                      which was converted to relational schema
                      and then to a database using MySQL.
                      With this database I constructed complex queries.
                      <br /> <HiCursorClick className='clickMe'/>
                </div>
              </a>
              <img src={require('../Pictures/SQLscreen.png')} className='projPic right' alt='ER screenshot'/>
            </div>

            <div className='projContainer'>
              <a href='https://github.com/yig/graphics101-airbrush' target='_blank' rel='noreferrer'>
                <div className='projBlock right'>
                  <h4>Implemented a Digital Painting Tool Using C++</h4>
                    I created a translucent RGBA image for the spray of an airbrush using geometric equations. 
                    It deposits paint by compositing the airbrush RGBA onto the background centered at the mouse.
                    <br /> <HiCursorClick className='clickMe'/>
                </div>
              </a>
              <img src={require('../Pictures/paintscreen.png')} className='projPic' alt='paint screenshot' />
            </div>
          </div>
    );
}