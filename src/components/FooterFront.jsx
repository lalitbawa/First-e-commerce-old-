import React from 'react'
import './footerfront.css'

const FooterFront = () => {
  return (
    <div className='footer_container'>
      <div className='footer_buttons'>
      <ul>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Return/Exchange</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      </div>
      <div className="footer_end">
      <p>Made by Lalit Bawa. Website is under construction right now.</p>
      </div>
    </div>
  )
}

export default FooterFront