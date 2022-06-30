import React from 'react';
import './Header.css';
import Logo from '../../Img/dllogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

  return (
    <div className='header-container'>
        {/* logo  */}
        <img className='logo-header' alt='logo' src={Logo}></img>
        {/* navigation */}
        <div className='nav-container'>
            <div className='nav-a'><a href='https://google.com'>About</a></div>
            <div className='nav-a'><a href='https://google.com'>Work</a></div>
            <div className='nav-a'><a href='https://google.com'>Services</a></div>
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
