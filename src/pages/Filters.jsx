import React from 'react'
import './filters.css'
import { useRef } from 'react'
import datamt from '../clothingdata/tshirts.json'

const showFilter = () => {
  document.getElementsByClassName('sidebar')[0].classList.toggle('is-active')
}


const Filters = (props) => {

  const redT = useRef()
  const greenT = useRef()
  const blueT = useRef()
  const yellowT = useRef()
  const whiteT = useRef()
  const gucciT = useRef()
  const lvT = useRef()
  const bdT = useRef()
  const bossT = useRef()
  const hackettT = useRef()
  const armaniT = useRef()
  const p200 = useRef()
  const p400 = useRef()
  const p600 = useRef()
  const p800 = useRef()
  const p1000 = useRef()

  const gucciFunc = () => {
    if (gucciT.current.checked === true) {
      return "gucci"
    }
    if (gucciT.current.checked === false) {
      return "none"
    }
  }

  const hackettFunc = () => {
    if (hackettT.current.checked === true) {
      return "hackett"
    }
    if (hackettT.current.checked === false) {
      return "none"
    }
  }

  const lvFunc = () => {
    if (lvT.current.checked === true) {
      return "louis_vuitton"
    }
    if (lvT.current.checked === false) {
      return "none"
    }
  }

  const bossFunc = () => {
    if (bossT.current.checked === true) {
      return "boss"
    }
    if (bossT.current.checked === false) {
      return "none"
    }
  }

  const armaniFunc = () => {
    if (armaniT.current.checked === true) {
      return "armani"
    }
    if (armaniT.current.checked === false) {
      return "none"
    }
  }

  const bdFunc = () => {
    if (bdT.current.checked === true) {
      return "beyond_designs"
    }
    if (bdT.current.checked === false) {
      return "none"
    }
  }

  const redFunc = () => {
    if (redT.current.checked === true) {
      return "red"
    }
    if (redT.current.checked === false) {
      return "none"
    }
  }

  const greenFunc = () => {
    if (greenT.current.checked === true) {
      return "green"
    }
    if (greenT.current.checked === false) {
      return "none"
    }
  }

  const whiteFunc = () => {
    if (whiteT.current.checked === true) {
      return "white"
    }
    if (whiteT.current.checked === false) {
      return "none"
    }
  }

  const yellowFunc = () => {
    if (yellowT.current.checked === true) {
      return "yellow"
    }
    if (yellowT.current.checked === false) {
      return "none"
    }
  }

  const blueFunc = () => {
    if (blueT.current.checked === true) {
      return "blue"
    }
    if (blueT.current.checked === false) {
      return "none"
    }
  }

  const p200Func = (v) => {
    if(p200.current.checked === true){
      return 200
    }
    if(p200.current.checked === false){
      return 'none'
    }
  }

  const p400Func = (v) => {
    if(p400.current.checked === true){
      return 400
    }
    if(p400.current.checked === false){
      return 'none'
    }
  }

  const p600Func = (v) => {
    if(p600.current.checked === true){
      return 600
    }
    if(p600.current.checked === false){
      return 'none'
    }
  }

  const p800Func = (v) => {
    if(p800.current.checked === true){
      return 800
    }
    if(p800.current.checked === false){
      return 'none'
    }
  }

  const p1000Func = (v) => {
    if(p1000.current.checked === true){
      return 800
    }
    if(p1000.current.checked === false){
      return 'none'
    }
  }


  const makeChangeToBrandAndColor = () => {
    props.changeMenTee(
      datamt.filter(val => (val.brand.includes(gucciFunc()) || val.brand.includes(hackettFunc()) || val.brand.includes(bdFunc()) || val.brand.includes(lvFunc()) || val.brand.includes(bossFunc()) || val.brand.includes(armaniFunc())) && (val.color.includes(redFunc()) || val.color.includes(greenFunc()) || val.color.includes(yellowFunc()) || val.color.includes(whiteFunc()) || val.color.includes(blueFunc()))).map(
        data => (
          <div key={data.id}>
            <img src={data.itemlink} alt="" />
            <p>color - {data.color} colorid - {data.colorID} brand - {data.brand} gender - {data.gender}</p>
          </div>
        )
      )
    )
  }

  const makeChangeToBrandOnly = () => {
    props.changeMenTee(
      datamt.filter(val => val.brand.includes(gucciFunc()) || val.brand.includes(hackettFunc()) || val.brand.includes(bdFunc()) || val.brand.includes(lvFunc()) || val.brand.includes(bossFunc()) || val.brand.includes(armaniFunc())).map(
        data => (
          <div key={data.id}>
            <img src={data.itemlink} alt="" />
            <p>color - {data.color} colorid - {data.colorID} brand - {data.brand} gender - {data.gender}</p>
          </div>
        )
      )
    )
  }

  const makeChangeToColorOnly = () => {
    props.changeMenTee(
      datamt.filter(val => val.color.includes(redFunc()) || val.color.includes(greenFunc()) || val.color.includes(yellowFunc()) || val.color.includes(whiteFunc()) || val.color.includes(blueFunc())).map(
        data => (
          <div key={data.id}>
            <img src={data.itemlink} alt="" />
            <p>color - {data.color} colorid - {data.colorID} brand - {data.brand} gender - {data.gender}</p>
          </div>
        )
      )
    )
  }

  const makeChangeToPriceOnly = () => {
    props.changeMenTee(
      datamt.filter(val => (val.price<=(p200Func()) || (val.price >200 && val.price <(p400Func())) || (val.price >400 && val.price <(p600Func())) || (val.price >600 && val.price <(p800Func())) || (val.price >(p1000Func())))).map(
        data => (
          <div key={data.id}>
            <img src={data.itemlink} alt="" />
            <p>color - {data.color} colorid - {data.colorID} brand - {data.brand} gender - {data.gender}</p>
          </div>
        )
      )
    )
  }

  return (
    <div>
      <div className='filter_button_container'>
        <button type='submit' className='showfilter' onClick={showFilter}>Filters &rarr;</button>
        <button type='submit' className='showfilter2' > Sort By &rarr;</button>
      </div>
      <div className='sidebar'>
        <h3>Filters</h3>
        <h5 onClick={showFilter}>X  Close Filters</h5>
        <div className='sidebar-brand'>
          <h4>Brands</h4>
          <div><input type="checkbox" id='sidebar-brand-gucci' ref={gucciT} onClick={(e) => {

          }} />
            <label htmlFor="sidebar-brand-gucci" >Gucci</label></div>
          <div><input type="checkbox" id='sidebar-brand-armani' ref={armaniT} />
            <label htmlFor="sidebar-brand-armani">Armani</label></div>
          <div><input type="checkbox" id='sidebar-brand-boss' ref={bossT} />
            <label htmlFor="sidebar-brand-boss">Boss</label></div>
          <div><input type="checkbox" id='sidebar-brand-hackett' ref={hackettT} />
            <label htmlFor="sidebar-brand-hackett">Hackett</label></div>
          <div><input type="checkbox" id='sidebar-brand-lv' ref={lvT} />
            <label htmlFor="sidebar-brand-lv">Louis Vuitton</label></div>
          <div><input type="checkbox" id='sidebar-brand-bd' ref={bdT} />
            <label htmlFor="sidebar-brand-bd">Beyond Designs Handmade</label></div>
        </div>
        <div className='sidebar-price'>
          <h4>Price</h4>
          <div><input type="checkbox" id='sidebar-price-200' ref={p200} />
            <label htmlFor="sidebar-price-200">0-200$</label></div>
          <div><input type="checkbox" id='sidebar-price-400' ref={p400} />
            <label htmlFor="sidebar-price-400">200-400$</label></div>
          <div><input type="checkbox" id='sidebar-price-600' ref={p600} />
            <label htmlFor="sidebar-price-600">400-600$</label></div>
          <div><input type="checkbox" id='sidebar-price-800' ref={p800} />
            <label htmlFor="sidebar-price-800">600-800$</label></div>
          <div><input type="checkbox" id='sidebar-price-1000' ref={p1000} />
            <label htmlFor="sidebar-price-1000">800$+</label></div>
        </div>
        <div className='sidebar-color'>
          <h4>Color</h4>
          <form action="/">
            <div><input type="checkbox" id='sidebar-color-red' ref={redT} />
              <label htmlFor="sidebar-color-red"><span className='makeitred'>red</span>Red</label></div>
            <div><input type="checkbox" id='sidebar-color-green' ref={greenT} />
              <label htmlFor="sidebar-color-green"><span className='makeitgreen'>red</span>Green</label></div>
            <div><input type="checkbox" id='sidebar-color-blue' ref={blueT} />
              <label htmlFor="sidebar-color-blue"><span className='makeitblue' >red</span>Blue</label></div>
            <div><input type="checkbox" id='sidebar-color-yellow' ref={yellowT} />
              <label htmlFor="sidebar-color-yellow"><span className='makeityellow'>red</span>Yellow</label></div>
            <div><input type="checkbox" id='sidebar-color-white' ref={whiteT} />
              <label htmlFor="sidebar-color-white"><span className='makeitwhite'>red</span>White</label></div>
          </form>
          <button type='submit' className='filter_apply' onClick={(e) => {
            if ((gucciT.current.checked || hackettT.current.checked || bdT.current.checked || lvT.current.checked || bossT.current.checked || armaniT.current.checked) === true && (redT.current.checked || yellowT.current.checked || blueT.current.checked || greenT.current.checked || whiteT.current.checked) === true) {
              makeChangeToBrandAndColor()
            }
            else if ((gucciT.current.checked && hackettT.current.checked && bdT.current.checked && lvT.current.checked && bossT.current.checked && armaniT.current.checked) === false && (redT.current.checked || yellowT.current.checked || blueT.current.checked || greenT.current.checked || whiteT.current.checked) === true) {
              makeChangeToColorOnly()
            }
            else if ((gucciT.current.checked || hackettT.current.checked || bdT.current.checked || lvT.current.checked || bossT.current.checked || armaniT.current.checked) === true && (redT.current.checked || whiteT.current.checked || yellowT.current.checked || blueT.current.checked || greenT.current.checked) === false) {
              makeChangeToBrandOnly()
            }
            else if ((p200.current.checked || p400.current.checked || p600.current.checked || p800.current.checked || p1000.current.checked) === true) {
              makeChangeToPriceOnly()
            }
          }}>Apply Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Filters