import React from 'react'
import "./HeroStyles.css"
import {AiOutlineSearch} from 'react-icons/ai'

import video from '../../assests/maldivesVideo.mp4'

function hero() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='overlay'>
      </div>
      <div className='content'>
        <h1>First class travel</h1>
        <h2>Top locations worldwide</h2>
        <form className='form'>
            <div><input type="text" placeholder="Search destinations"/></div>
        </form>
        <div>
            <button><AiOutlineSearch className='icon' /></button>
        </div>
      </div>
    </div>
  )
}

export default hero
