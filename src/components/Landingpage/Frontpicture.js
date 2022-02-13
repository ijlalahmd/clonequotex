import React from 'react'
import './Fontpicture.css'
import logo from '../../assets/image/unnamed.jpg'

function Frontpicture() {
  return (
    <div>
        <img src={logo} className='image1' />
        <div className='demobutton'>
          <button className='demobtn1'>Registration</button>
          <button className='demobtn2'> Demo </button>
        </div>
      
    </div>
  )
}

export default Frontpicture;