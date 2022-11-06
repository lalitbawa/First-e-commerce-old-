import React from 'react'
import './showitem.css'
import { useLocation , useNavigate } from 'react-router-dom'
import pantdata from '../clothingdata/pants.json'
import tshirtdata from '../clothingdata/tshirts.json'



const ShowItem = () => {

const location = useLocation();

const navigate = useNavigate()

let goBackButton;

const dataSort = ()=>{
  if(location.state.id <=pantdata.length){
    goBackButton = '/mentshirt'
    return tshirtdata
  }
  else if(location.state.id >pantdata.length){
    goBackButton = '/menpant'
    return pantdata
  }
}

  const mensTshirts = (dataSort().filter(data =>(data.id === location.state.id))).map(
    data => (
      <div key={data.id} className="mentshirt_container_items">
      <img src={data.itemlink} alt=""/>
      <h3>{data.brand.charAt(0).toUpperCase() + data.brand.slice(1).replaceAll("_"," ")}</h3>
      <p><span className='mentshirt_container_items_text'>Gender</span>{" - " + data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}</p>
      <p><span className='mentshirt_container_items_text'>Color</span>{" - " + data.color.charAt(0).toUpperCase() + data.color.slice(1)}</p>
      <p><span className='mentshirt_container_items_text'>Price (in $)  </span>{" - " + data.price}</p>
      <button type='submit' className='showdetails_goback showdetails_goback2' onClick={()=>{
        console.log("you pressed add to cart");
      }}>Add to Cart</button>
      <button type='submit' className='showdetails_goback showdetails_goback2'>
      Remove from Cart
      </button>
      </div>
    )
  )

  return (
    <div className='showitem_main'>
      <div><button type='submit' className='showdetails_goback' onClick={()=>{navigate(goBackButton)}} >Go back</button></div>
    <div>{mensTshirts}</div>
    </div>
  )
}

export default ShowItem