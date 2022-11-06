import React from 'react'
import './cart.css'
import { useLocation,useNavigate } from 'react-router-dom'

const Cart = () => {

const location = useLocation()
const navigate = useNavigate()

if(location.state.id == undefined){
    console.log('nothing here')
}
else{
    console.log(location.state.id)
}

  return (
    <div><h1>assa</h1></div>
  )
}

export default Cart