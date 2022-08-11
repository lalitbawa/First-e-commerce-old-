import React from 'react'
import './below_front.css'
import account from '../assets/profile.png'
import exchange from '../assets/exchange.png'
import tracking from '../assets/tracking.png'
import gucci_logo from '../assets/gucci_logo.png'
import bd_logo from '../assets/bd_logo.png'
import armani_logo from '../assets/armani_logo.png'
import lv_logo from '../assets/lv_logo.png'
import boss_logo from '../assets/boss_logo.png'
import hackett_logo from '../assets/hackett_logo.png'

const Below_front = () => {
  return (
    <div>
      <div className="brand_logo_text">
        Why choose us?
      </div>
    <div className='feature'>
      <div className="feature_child">
        <img src={account} alt="account" />
        <h3>User Account</h3>
        <p>Login to your account to see updates about order tracking and our specialised offers</p>
      </div>
      <div className="feature_child">
      <img src={exchange} alt="exchange" />
        <h3>Exchanges and returns</h3>
        <p>Hassale free exchange and returns. Doorstep pickup.</p>
      </div>
      <div className="feature_child">
      <img src={tracking} alt="tracking" />
        <h3>Order tracking</h3>
        <p>We will always keep you updated about your order</p>
      </div>
    </div>
    <div className='brand_logo'>
        <div className='brand_logo_text'>
          Explore our top brands
        </div>
        <div className="brand_logo_images">
          <img src={gucci_logo} alt="gucci_logo" />
          <img src={armani_logo} alt="armani_logo" />
          <img src={boss_logo} alt="boss_logo" />
          <img src={hackett_logo} alt="hackett_logo" />
          <img src={lv_logo} alt="lv_logo" />
          <img src={bd_logo} alt="bd_logo" />
        </div>
      </div>
    </div>
  )
}

export default Below_front