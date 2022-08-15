import React from 'react'
import './filters.css'
import { useRef,useEffect,useState } from 'react'
import datamt from '../clothingdata/tshirts.json'

const showFilter = ()=>{
    document.getElementsByClassName('sidebar')[0].classList.toggle('is-active')
}


const Filters = (props) => {
  
  const redT = useRef()
  const greenT = useRef()
  const blueT = useRef()
  const yellowT = useRef()
  const whiteT = useRef()

const [redVal, setredVal] = useState([])
const [greenVal, setgreenVal] = useState([])


  console.log("value of red val is " + redVal + " " + "value of green val is " + greenVal + " ------i'm outside")
  console.log("--------------------------------------------------------------------------------------")

  const makeChange = ()=>{
    props.changeMenTee(
      datamt.filter(val=> val.color.includes(redVal) | val.color.includes(greenVal)).map(
        data => (
          <div id={data.colorID} key={data.id}>
          <img src={data.itemlink} alt="" />
          <p>color - {data.color} colorid - {data.colorID} brand - {data.brand} gender - {data.gender} {console.log("value of red val is " + redVal + " " + "value of green val is " + greenVal)}</p>
          </div>
        )
      )
    )
  }

  return (
    <div>
      <button type='submit' className='showfilter' onClick={showFilter}>Show/Hide Filters &rarr;</button>
    <div className='sidebar'>
        <h3>Filters</h3>
        <div className='sidebar-brand'>
            <h4>Brands</h4>
            <div><input type="checkbox" id='sidebar-brand-gucci'/>
            <label htmlFor="sidebar-brand-gucci">Gucci</label></div>
            <div><input type="checkbox" id='sidebar-brand-armani'/>
            <label htmlFor="sidebar-brand-armani">Armani</label></div>
            <div><input type="checkbox" id='sidebar-brand-boss'/>
            <label htmlFor="sidebar-brand-boss">Boss</label></div>
            <div><input type="checkbox" id='sidebar-brand-hackett'/>
            <label htmlFor="sidebar-brand-hackett">Hackett</label></div>
            <div><input type="checkbox" id='sidebar-brand-lv'/>
            <label htmlFor="sidebar-brand-lv">Louis Vuitton</label></div>
            <div><input type="checkbox" id='sidebar-brand-bd'/>
            <label htmlFor="sidebar-brand-bd">Beyond Designs Handmade</label></div>
        </div>
        <div className='sidebar-price'>
            <h4>Price</h4>
            <div><input type="checkbox" id='sidebar-price-200'/>
            <label htmlFor="sidebar-price-200">0-200$</label></div>
            <div><input type="checkbox" id='sidebar-price-400'/>
            <label htmlFor="sidebar-price-400">0-400$</label></div>
            <div><input type="checkbox" id='sidebar-price-600'/>
            <label htmlFor="sidebar-price-600">0-600$</label></div>
            <div><input type="checkbox" id='sidebar-price-800'/>
            <label htmlFor="sidebar-price-800">0-800$</label></div>
            <div><input type="checkbox" id='sidebar-price-1000'/>
            <label htmlFor="sidebar-price-1000">0-1000$</label></div>
        </div>
        <div className='sidebar-color'>
            <h4>Color</h4>
            <form action="/">
            <div><input type="checkbox" id='sidebar-color-red' ref={redT} onClick={(e)=>{
              if(redT.current.checked === true){
                // document.getElementById("men_red_t").style.display = "inline"
                setredVal("red")
                makeChange()
              }
              else if(redT.current.checked === false){
                // document.getElementById("men_red_t").style.display = "none"
                setredVal("none")
                makeChange()
              }
            }}/>
            <label htmlFor="sidebar-color-red"><span className='makeitred'>red</span>Red</label></div>
            <div><input type="checkbox" id='sidebar-color-green' ref={greenT} onClick={(e)=>{
              if(greenT.current.checked === true){
                // document.getElementById("men_green_t").style.display = "inline"
                setgreenVal("green")
                makeChange()
              }
              else if(greenT.current.checked === false){
                // document.getElementById("men_green_t").style.display = "none"
                setgreenVal("none")
                makeChange()
              }
            }}/>
            <label htmlFor="sidebar-color-green"><span className='makeitgreen'>red</span>Green</label></div>
            <div><input type="checkbox" id='sidebar-color-blue' ref={blueT} onClick={(e)=>{
              if(blueT.current.checked === true){
                // document.getElementById("men_blue_t").style.display = "inline"
              }
              else if(blueT.current.checked === false){
                // document.getElementById("men_blue_t").style.display = "none"
              }
            }}/>
            <label htmlFor="sidebar-color-blue"><span className='makeitblue' >red</span>Blue</label></div>
            <div><input type="checkbox" id='sidebar-color-yellow' ref={yellowT} onClick={(e)=>{
              if(yellowT.current.checked === true){
                // document.getElementById("men_yellow_t").style.display = "inline"
              }
              else if(yellowT.current.checked === false){
                // document.getElementById("men_yellow_t").style.display = "none"
              }
            }}/>
            <label htmlFor="sidebar-color-yellow"><span className='makeityellow'>red</span>Yellow</label></div>
            <div><input type="checkbox" id='sidebar-color-white' ref={whiteT} onClick={(e)=>{
              if(whiteT.current.checked === true){
                // document.getElementById("men_white_t").style.display = "inline"
              }
              else if(whiteT.current.checked === false){
                // document.getElementById("men_white_t").style.display = "none"
              }
            }}/>
            <label htmlFor="sidebar-color-white"><span className='makeitwhite'>red</span>White</label></div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Filters