import React from 'react'
import './mentshirt.css'
import tshirtdata from '../clothingdata/tshirts.json'
import { useState } from 'react'

const Mentshirt = () => {
const [tshirts, settshirts] = useState(tshirtdata.map(
  data => (
    <div  key={data.id}>
    <img src={data.itemlink} alt="" />
    <p>color - {data.color} brand - {data.brand} gender - {data.gender}</p>
    </div>
  )
))

const blueT = tshirtdata.filter( val => val.color == "blue")


  return (
    <div className='mentshirt_container'>
        {
            tshirts
        }
    </div>
  )
}

export default Mentshirt