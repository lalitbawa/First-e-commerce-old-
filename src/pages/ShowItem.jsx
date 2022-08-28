import React from 'react'
import './showitem.css'
import { useLocation , useNavigate } from 'react-router-dom'
import pantdata from '../clothingdata/pants.json'



const ShowItem = () => {

const location = useLocation();

const navigate = useNavigate()

  const mensTshirts = pantdata.filter(data =>(data.id === location.state.id)).map(
    data => (
      <div key={data.id} className="mentshirt_container_items">
      <img src={data.itemlink} alt=""/>
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

  return (
    <div>
      <div><button type='submit' id='something' onClick={()=>{navigate('/menpant')}} >Go back</button></div>
    <div>{mensTshirts}</div>
    </div>
  )
}

export default ShowItem