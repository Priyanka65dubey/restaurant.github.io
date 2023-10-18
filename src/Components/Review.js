import React from 'react'
import { review } from "../Data";
import qouteImg from "../assets/images/qouts2.png"
const Review = () => {
  return (
    <section className='review'>
      <h1 className='heading'>customer's <span>review</span></h1>
      <div className='box-container'>
        {
          review.map((item,index)=>(
            <div className='box'>
              <img src={qouteImg}alt=""className='quote'/>
              <p>Food brings people together on many different levels. It's nourishment of the soul and body; it's truly love.</p>
              <img src={item.img}alt="" />
              <h3>john deo</h3>
              <div className='stars'>

              <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star-half-alt'/>
              </div>
              </div>
          ))
        }
      </div>
    </section>
  )
}

export default Review;