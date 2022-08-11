import React from 'react'
import './back_image.css'
import back_img from '../assets/front.png'

const Back_image = () => {
  return (
      <div className='image_back'>
        <img src={back_img} alt="back_image"  />
      </div>
  )
}

export default Back_image