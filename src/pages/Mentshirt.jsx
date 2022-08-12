import React from 'react'
import './mentshirt.css'
import tshirtdata from '../clothingdata/tshirts.json'
import { useState } from 'react'

const Mentshirt = () => {
const [tshirts, setdatas] = useState(tshirtdata.map(
  data => (
    <img key={data.id} src={data.itemlink} alt="" />
  )
))

  return (
    <div className='mentshirt_container'>
        {
            tshirts
        }
    </div>
  )
}

export default Mentshirt