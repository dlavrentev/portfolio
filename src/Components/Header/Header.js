import React from 'react'
import './Header.css'
import Logo from '../../Img/dllogo.png'

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
        <div className='circle-container'>
            <div className='circle'></div>
            <div className='circle'></div> 
            <div className='circle'></div>       
        </div>
            
    
    </div>
  )
}
