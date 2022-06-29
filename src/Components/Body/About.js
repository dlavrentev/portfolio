import React from 'react'
import './About.css'
import Image from '../../Img/profileimagenew2.png'
import Polka from '../../Img/polkadot.png'

export default function About() {
  return (
    <div className='about-container'>
        <div className='about-body-left'>
            <h1>Hallo! I'm a
            <span className='h1-custom'> frontend</span> developer
            in making.</h1>
            <p>I'm Dimitri! A german-based programming enthusiast with the goal to get his first 
                job as a frontend developer!</p>
            <button>Look at my work!</button>

        </div>
        <div className='about-body-right'> 
                <img src={Image} alt='profile' className='profile-image'></img>
        </div>
    </div>
  )
}
