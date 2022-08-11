import React from 'react'
import Navbar from './components/Navbar'
import './app.css'
import Back_image from './components/Back_image'
import Below_front from './components/Below_front'
import Carousal from './components/Carousal'
import Gallery_front from './components/Gallery_front'
import FooterFront from './components/FooterFront'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
        <Navbar2/>
        <Back_image/>
        <Below_front/>
        <Carousal/>
        <Gallery_front/>
        <FooterFront/>
    </div>
  )
}

export default App