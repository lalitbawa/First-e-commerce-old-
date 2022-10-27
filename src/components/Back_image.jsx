import React from 'react'
import './back_image.css'
import back_img from '../assets/bg_final.gif'

const Back_image = () => {
  return (
      <div className='image_back'>
        <img src={back_img} alt="back_image"  />
        <h2>Exclusively for Men</h2>
      </div>
  )
}

export default Back_image