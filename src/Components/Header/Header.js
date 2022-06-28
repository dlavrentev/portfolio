import React from 'react'
import './Header.css'
import Logo from '../../Img/dllogo.png'

export default function Header() {


    const btnEl = document.querySelector('.btn');

    function toggleOptions() {
      const wrapperEl = document.querySelector('.wrapper');
      const iconEl = btnEl.querySelector('i');

      wrapperEl.classList.toggle('active');

      if (iconEl.classList.contains('ri-share-line')) {
        iconEl.classList.replace('ri-share-line', 'ri-close-line');
      } else {
        iconEl.classList.replace('ri-close-line', 'ri-share-line');
      }
    };

    

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
            <div class="wrapper">
                <button class="btn">
                    <i class="ri-share-line"></i>
                </button>
                <ul class="list">
                    <li class="item">
                        <a href="#" class="link ig">
                            <i class="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li class="item" >
                        <a href="#" class="link tw">
                            <i class="ri-twitter-line"></i>
                        </a>
                    </li>
                    <li class="item" >
                        <a href="#" class="link sc">
                            <i class="ri-snapchat-line"></i>
                        </a>
                    </li>
                 </ul>
            </div>
    
    </div>
  )
}
