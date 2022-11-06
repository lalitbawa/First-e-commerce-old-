import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Mentshirt from './pages/Mentshirt'
import Menpant from './pages/Menpant'
import ShowItem from './pages/ShowItem'
import Cart from './pages/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mentshirt' element={<div>
          <Navbar/>
          <Mentshirt/>
        </div>}/>
        <Route path='/menpant' element={<div>
          <Navbar/>
          <Menpant/>
        </div>}/>
        <Route path='/showitem' element={<div>
          <Navbar/>
          <ShowItem/>
        </div>}/>
        <Route path='/cart' element = {<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App