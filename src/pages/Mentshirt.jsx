import React from 'react'
import './mentshirt.css'
import tshirtdata from '../clothingdata/tshirts.json'
import Filters from './Filters'
import { useState } from 'react'

const Mentshirt = () => {
  
const mensTshirts = tshirtdata.map(
  data => (
    <div key={data.id} className="mentshirt_container_items">
    <img src={data.itemlink} alt="" />
    <h3>{data.brand.charAt(0).toUpperCase() + data.brand.slice(1).replaceAll("_"," ")}</h3>
    <p><span className='mentshirt_container_items_text'>Gender</span>{" - " + data.gender.charAt(0).toUpperCase() + data.brand.slice(1)}</p>
    <p><span className='mentshirt_container_items_text'>Color</span>{" - " + data.color.charAt(0).toUpperCase() + data.brand.slice(1)}</p>
    <p><span className='mentshirt_container_items_text'>Price (in $)  </span>{" - " + data.price}</p>
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