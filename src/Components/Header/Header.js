import React from 'react';
import './Header.css';
import Logo from '../../Img/dllogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

  return (
    <div className='header-container'>
        {/* circle  */}
        <div className='circle'>
            
        </div>
        {/* navigation */}
        <div className='nav-container'>
            <div className='nav-a'><a href='https://google.com'>About</a></div>
            <div className='nav-a'><a href='https://google.com'>Projects</a></div>
            <div className='nav-a'><a href='https://google.com'>Myself</a></div>
            <div className='nav-a'><a href='https://google.com'>Contact</a></div>
        </div>
        {/* social media buttons  */}
        <div className="icons">
            <a href="#" className="icon icon--linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="icon icon--github">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
            
    
    </div>
  )
}
