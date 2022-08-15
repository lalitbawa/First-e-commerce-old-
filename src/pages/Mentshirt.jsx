import React from 'react'
import './mentshirt.css'
import tshirtdata from '../clothingdata/tshirts.json'
import Filters from './Filters'
import { useState } from 'react'

const Mentshirt = () => {
  
const mensTshirts = tshirtdata.map(
  data => (
    <div id={data.colorID} key={data.id}>
    <img src={data.itemlink} alt="" />
    <p>color - {data.color} colorid - {data.colorID} brand - {data.brand} gender - {data.gender}</p>
    </div>
  )
)
const [menTee,setmenTee] = useState(mensTshirts)
  

  return (
    <div>
      <Filters changeMenTee = {setmenTee}/>
    <div className='mentshirt_container'>
        {
            menTee
        }
    </div>
    </div>
  )
}

export default Mentshirt