import React from 'react'
import './mentshirt.css'
import pantdata from '../clothingdata/pants.json'
import Filters from './Filters'
import { useState} from 'react'
import {useNavigate } from 'react-router-dom'

const Menpant = () => {

const navigate = useNavigate()

let dataToShowItem = 0;

const routeChange = ()=>{

let path = '/showitem'
navigate(path,{state:{id : dataToShowItem}})
}

const mensTshirts = pantdata.map(
  data => (
    <div key={data.id} className="mentshirt_container_items">
    <img src={data.itemlink} alt="" typeof='submit' onClick={()=>{
      dataToShowItem = data.id
      routeChange()
    }}/>
    <h3>{data.brand.charAt(0).toUpperCase() + data.brand.slice(1).replaceAll("_"," ")}</h3>
    <p><span className='mentshirt_container_items_text'>Gender</span>{" - " + data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}</p>
    <p><span className='mentshirt_container_items_text'>Color</span>{" - " + data.color.charAt(0).toUpperCase() + data.color.slice(1)}</p>
    <p><span className='mentshirt_container_items_text'>Price (in $)  </span>{" - " + data.price}</p>
    <button type='submit' onClick={()=>{
      console.log("you pressed add to cart");
    }}>Add to Cart</button>
    <button type='submit'>
    Remove from Cart
    </button>
    </div>
  )
)
const [menTee,setmenTee] = useState(mensTshirts)

  return (
    <div>
      <Filters datamt = {pantdata} changeMenTee = {setmenTee}/>
    <div className='mentshirt_container'>
        {
            menTee
        }
    </div>
    </div>
  )
}

export default Menpant