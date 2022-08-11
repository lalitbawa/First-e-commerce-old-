import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar2 = () => {

const ham_but = ()=>{
    document.getElementsByClassName('ham')[0].classList.toggle('is-active')
    document.getElementsByClassName('ham-menu')[0].classList.toggle('is-active')
}

const openMtop = ()=>{
    document.getElementsByClassName('mtopwear-content')[0].classList.toggle('is-open')
}
const openMbot = ()=>{
    document.getElementsByClassName('mbottomwear-content')[0].classList.toggle('is-open')
}

const openWtop = ()=>{
    document.getElementsByClassName('wtopwear-content')[0].classList.toggle('is-open')
}
const openWbot = ()=>{
    document.getElementsByClassName('wbottomwear-content')[0].classList.toggle('is-open')
}

const openH = ()=>{
    document.getElementsByClassName('hwear-content')[0].classList.toggle('is-open')
}

  return (
    <div>
        <nav>
            <img src={logo} alt="logo" />
            <div className='nav-links'>
                <ul>
                    <li>
                        <a href="#">What's New</a>
                    </li>
                    <li>
                        <Link to='/menclothing'>Men</Link>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">Handmade</a>
                    </li>
                </ul>
            </div>
            <button className='ham' onClick={ham_but}>
                <div className='bar'></div>
            </button>
        </nav>
        {/* mobile menu */}
        <div className='ham-menu'>
            <div className='login-signup'>
                <button type='submit'>Login</button>
                <button type='submit'>Signup</button>
            </div>
            <div className='ham-search'>
                <input type="text" placeholder='Enter something' />
                <button type='submit'>Search</button>
            </div>
            <div className='ham-items-men'>
                <h3>Men</h3>
                <button type='submit' className='mtopwear' onClick={openMtop}>Top Wear &rarr;</button>
                <div className='mtopwear-content'>
                    <a href="#">Tshirts</a>
                    <a href="#">Shirts</a>
                    <a href="#">Jackets</a>
                </div>
                <button type='submit' className='mbottomwear' onClick={openMbot}>Bottom Wear &rarr;</button>
                <div className='mbottomwear-content'>
                    <a href="#">Jeans</a>
                    <a href="#">Pants</a>
                    <a href="#">Shorts</a>
                </div>
            </div>
            <div className='ham-items-women'>
                <h3>Women</h3>
                <button type='submit' className='wtopwear' onClick={openWtop}>Top Wear &rarr;</button>
                <div className='wtopwear-content'>
                    <a href="#">Tops</a>
                    <a href="#">Shirts</a>
                    <a href="#">Jackets</a>
                </div>
                <button type='submit' className='wbottomwear' onClick={openWbot}>Bottom Wear &rarr;</button>
                <div className='wbottomwear-content'>
                    <a href="#">Jeans</a>
                    <a href="#">Pants</a>
                    <a href="#">Shorts</a>
                </div>
            </div>
            <div className='ham-items-handmade'>
                <h2>Beyond Designs Handmade</h2>
                <button type='submit' className='hwear' onClick={openH}><h4>Explore  &rarr;</h4></button>
                <div className='hwear-content'>
                    <input type="text" placeholder='Select your Design' />
                    <button type='submit' className='hupload'>Upload and get a quote</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar2