import React, { useRef } from 'react'
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



{/* <div className="wrapper">
                <button className="btn">btn
                    <i className="ri-share-line"></i>
                </button>
                <ul className="list">
                    <li className="item">
                        <a href="https://google.com" className="link ig">
                            <i className="ri-instagram-line">1</i>
                        </a>
                    </li>
                    <li className="item" >
                        <a href="https://google.com" className="link tw">
                            <i className="ri-twitter-line">2</i>
                        </a>
                    </li>
                    <li className="item" >
                        <a href="https://google.com" className="link sc">
                            <i className="ri-snapchat-line">3</i>
                        </a>
                    </li>
                 </ul>
            </div> */}