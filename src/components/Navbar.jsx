import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import hamburger from '../assets/hamburger_icon.png'

const Navbar = () => {
  window.addEventListener('scroll',()=>{
    const navbar = document.querySelector('nav')
    navbar.classList.toggle('sticky', window.scrollY>0)
  })

  const ham_open = ()=>{
    const navbar = document.querySelector('nav')
    const ham = document.getElementsByClassName('hamburger')[0]
    ham.style.display = 'flex'
  }

  const ham_close = ()=>{
    const navbar = document.querySelector('nav')
    const ham = document.getElementsByClassName('hamburger')[0]
    ham.style.display = 'none'
  }

  return (
    <div>
        <nav>
            <a href="#" className='logo'><img src={logo} alt="logo" /></a>
            {/* for mobile display only */}
            <li className='gothic_new'><a href="#">What's new</a></li>
            {/* for mobile display only */}
            <ul>
              <li className='gothic'><a href="#">What's new</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Accessories</a></li>
              <li className='gothic'><a href="#">Take me beyond designs</a></li>
            </ul>
            <a className='ham' onClick={ham_open}><img src={hamburger} alt="ham" /></a>
        </nav>
        {/* hamburger contents  */}
        <div className='hamburger'>
              <div className='hamburger_buttons'>
                    <button id='hamburger_buttons_signup' type='submit'>Sign Up</button>
                    <button type='submit' id='hamburger_buttons_login'>Login</button>
                    <button type='submit' id='hamburger_buttons_close' onClick={ham_close}>X</button>
              </div>
              <div className='hamburger_search'>
                    <input type="text" placeholder='Enter Something' />
                    <button type='submit'>Search</button>
              </div>
              <div className='hamburger_items'>
                    <div className='hamburger_items_men'>
                      <ul>
                        <li>
                          <a href="#" className='hamburger_bold2'>Men</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_gothic'>What’s new</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_bold'>Topwear</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_bold'>Bottomwear</a>
                        </li>
                        <li>
                          <a href="#">Pants</a>
                        </li>
                        <li>
                          <a href="#">Jeans</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_bold'>Footwear</a>
                        </li>
                        <li>
                          <a href="#">Slippers</a>
                        </li>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Boots</a>
                        </li>
                      </ul>
                    </div>
                    <div className='hamburger_items_women'>
                      <ul>
                        <li>
                          <a href="#" className='hamburger_bold2'>Women</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_gothic'>What’s new</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_bold'>Topwear</a>
                        </li>
                        <li>
                          <a href="#">Tops</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_bold'>Bottomwear</a>
                        </li>
                        <li>
                          <a href="#">Pants</a>
                        </li>
                        <li>
                          <a href="#">Jeans</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#" className='hamburger_bold'>Footwear</a>
                        </li>
                        <li>
                          <a href="#">Slippers</a>
                        </li>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Boots</a>
                        </li>
                      </ul>
                    </div>
              </div>
              <a href="#" className='hamburger_tailor'>Or <br /> Get your own designs tailored</a>
        </div>
        {/* hamburger contents  */}
        </div>
  )
}

export default Navbar