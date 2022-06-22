import React from 'react'
import '../../Style.css'
import Image from '../../Img/profileimage.PNG'

export default function About() {
  return (
    <div className='about-container'>
        <div className='about-body-left'>
            <h1>Hallo! I'm a</h1>
            <h1><span className='h1-custom'>frontend</span>-developer</h1>
            <h1>in making.</h1>
            <p>I'm Dimitri! A german-based programming enthusiast with the goal 
            </p>
            <p>to get his first 
                job as a frontend developer!</p>
            <button>Look at my work!</button>

        </div>
        <div className='about-body-right'> 
                <img src={Image} alt='profile' className='profile-image'></img>
        </div>
    </div>
  )
}
