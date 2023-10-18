import React from 'react'
import aboutimg from "../assets/images/hm3.jpeg"
const About = () => {
  return (
    <>
    <section className='about' id='about'>
        <h1 className='heading'>
            <span>about</span>us
        </h1>
        <div className='row'>
            <div className='image'>
                <img src={aboutimg} alt=""style={{height:"300px",width:"500px"}}/>
            </div>
            <div className='content'>
                <h3>What Makes Our Food Special ?</h3>
                <p>All the dishes on the menu are invented in my kitchen. Previously, you would not have found those dishes anywhere else, in any other restaurant. But, now, definitely, you will find because, after 10 years, there are lots of recipes people might have taken from the Indian Accent kitchen. The thing is – all these dishes were invented in the Indian Accent kitchen and that is why we call it inventive Indian cuisines.

</p>
<p>The modern Indian food can come from a traditional Indian only. The heart and soul of the traditional food should be there in modern Indian dishes. While eating, you should feel that you are eating Indian cuisine rather than seeing it as an alien dish. It should be relatable yet different.</p>
<a href="#" className='btn'>Learn More</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default About