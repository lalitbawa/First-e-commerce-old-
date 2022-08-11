import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import Filters from './pages/Filters'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menclothing' element={<div>
          <Navbar/>
          <Filters/>
        </div>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App