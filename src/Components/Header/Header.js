import React from 'react'
import './Header.css'
import Logo from '../../Img/dllogo.png'

export default function Header() {
  return (
    <div className='header-container'>
        <img className='logo-header' alt='logo' src={Logo}></img>
        <div className='nav-container'>
            <div className='nav-a'>About</div>
            <div className='nav-a'>Work</div>
            <div className='nav-a'>Services</div>
            <div className='nav-a'>Contact</div>
        </div>
        <div className='circle-container'>
            <div className='circle'>1</div>
            <div className='circle'>2</div>
            <div className='circle'>3</div>
        </div>
    </div>
  )
}
