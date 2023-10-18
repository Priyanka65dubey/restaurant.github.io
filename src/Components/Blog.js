import React from 'react'
import {blog} from "../Data"
const Blog = () => {
  return (
    <section className='blogs' id="blogs">
        <h1 className='heading'>our<span>blogs</span></h1>
<div className='box-container'>
    {
        blog.map((item,index)=>(
            <div className='box'key={index}>
                <div className='image'>
                    <img src={item.img}alt=""/>
                </div>
                <div className='content'>
                    <a href="#"className='title'>tasty and refreshing spices</a>
                    <span>by admin / 30 dec 2023</span>
                    <p>A foodie is a person who has an ardent or refined interest in food, and who eats food not only out of hunger but also as a hobby.</p>
                    <a href="#"className='btn'>read more</a>
                </div>
                </div>
        ))
    }
</div>
    </section>
  )
}

export default Blog