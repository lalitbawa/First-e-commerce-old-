import React from 'react'
import './mentshirt.css'
import tshirtdata from '../clothingdata/tshirts.json'
import { useState } from 'react'

const Mentshirt = () => {
const [datas, setdatas] = useState()

    const mapfunc = (e)=>{
        setdatas(<img src={e.itemlink} alt="" />)
    }
    
    tshirtdata.map(mapfunc)


  return (
    <div id='mentshirt_container'>
        {
            datas
        }
        <img src="" alt="" />
    </div>
  )
}

export default Mentshirt