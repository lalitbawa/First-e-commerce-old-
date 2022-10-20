import React from 'react'
import './carousal.css'
import reviewPhoto from '../assets/review_user_img.png'
import rating from '../assets/rating.png'

const cor = document.getElementsByClassName('review')

let i = 1;

const prev_but = ()=>{
  cor[i-1].style.display = ('none')
  cor[i-2].style.display = ('flex')
  i--
  if(i<=1){
    document.getElementById('prev_cor').style.display = ('none');
  }
  else if(i<cor.length){
    document.getElementById('next_cor').style.display = ('flex');
  }
}

const next_but = ()=>{
  cor[i].style.display = ('flex')
  cor[i-1].style.display = ('none')
  i++
  if(i>cor.length-1){
    document.getElementById('next_cor').style.display = ('none');
  }
  else if(i>0){
    document.getElementById('prev_cor').style.display = ('flex');
  }
}

const Carousal = () => {
  return (
    <div>
      <div className='carousal_heading'>
        What our customers say?
      </div>
    <div className='carousal_container'>
      {/* first review */}
      <div className='review' id='first_cor'>
        <div className="review_image">
          <div className="review_image_1">
            <img src={reviewPhoto} alt="profilepic" />
          </div>
          <div className="review_image_2">
            <h4>Clark jones</h4>
            <p>Fashion Desginer</p>
          </div>
        </div>
        <div className='review_content'>
            <p>review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 revie</p>
            <h5>Clark jones rated his experience as</h5>
            <img src={rating} alt="rating" />
        </div>
      </div>
      {/* second review */}
      <div className='review' id='second_cor'>
        <div className="review_image">
          <div className="review_image_1">
            <img src={reviewPhoto} alt="profilepic" />
          </div>
          <div className="review_image_2">
            <h4>abcd</h4>
            <p>Profession</p>
          </div>
        </div>
        <div className='review_content'>
            <p>review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 revie</p>
            <h5>abcd rated his experience as</h5>
            <img src={rating} alt="rating" />
        </div>
      </div>
      {/* third review */}
      <div className='review' id='third_cor'>
        <div className="review_image">
          <div className="review_image_1">
            <img src={reviewPhoto} alt="profilepic" />
          </div>
          <div className="review_image_2">
            <h4>wxyz</h4>
            <p>Wxysaydasd</p>
          </div>
        </div>
        <div className='review_content'>
            <p>review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 revie</p>
            <h5>wxyz rated his experience as</h5>
            <img src={rating} alt="rating" />
        </div>
      </div>
      <div className='cor_button_container'>
      <div id="prev_cor" onClick={prev_but}>&#8672;</div>
      <div id="next_cor" onClick={next_but}>&#8674;</div>
      </div>
    </div>
    </div>
  )
}

export default Carousal