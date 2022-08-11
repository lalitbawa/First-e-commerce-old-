import React from 'react'
import './gallery_front.css'
import logo from '../assets/bd_logo.png'
import image1 from '../assets/gallery1.png'
import image2 from '../assets/gallery2.png'
import image3 from '../assets/gallery3.png'
import image4 from '../assets/gallery4.png'
import image5 from '../assets/gallery5.png'
import image6 from '../assets/gallery6.png'
import image7 from '../assets/gallery7.png'
import image8 from '../assets/gallery8.png'

const Gallery_front = () => {
  return (
    <div>
        <div className='gallery_heading'>
            <div>
        <p>A glance at our very own...</p>
        <img src={logo} alt="bd_logo" />
            </div>
        </div>
        <div className='gallery_images'>
            <div className='gallery_images1'>
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
                <img src={image3} alt="image3" />
                <img src={image4} alt="image4" />
            </div>
            <div className="gallery_images2">
                <img src={image5} alt="image5" />
                <img src={image6} alt="image6" />
                <img src={image7} alt="image7" />
                <img src={image8} alt="image8" />
            </div>
        </div>
    </div>
  )
}

export default Gallery_front