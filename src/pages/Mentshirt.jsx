import React from 'react'
import './mentshirt.css'
import tshirtdata from '../clothingdata/tshirts.json'
import { useState } from 'react'
import Filters from './Filters'

const Mentshirt = () => {
const [tshirts, settshirts] = useState(tshirtdata.map(
  data => (
    <div  key={data.id}>
    <img src={data.itemlink} alt="" />
    <p>color - {data.color} brand - {data.brand} gender - {data.gender}</p>
    </div>
  )
))

// const testit = ()=>{
//   settshirts(
//     tshirtdata.filter( val => val.color === {redval} || val.color === {blueval} || val.color === {greenval} || val.color==={yellowval} || val.color==={whiteval}).map(data => (
//       <div  key={data.id}>
//       <img src={data.itemlink} alt="" />
//       <p>color - {data.color} brand - {data.brand} gender - {data.gender}</p>
//       </div>)
//   ))
// }

  return (
    <div>
      <Filters setTshirtData = {settshirts} />
    <div className='mentshirt_container'>
        {
            tshirts
        }
    </div>
    </div>
  )
}

export default Mentshirt