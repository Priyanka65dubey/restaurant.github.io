import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
        <div className='share'>
            <a href="#" className='fab fa-facebook'></a>
            <a href="#" className='fab fa-twitter'></a>
            <a href="#" className='fab fa-instagram'></a>
            <a href="#" className='fab fa-linkedin'></a>
            <a href="#" className='fab fa-pinterest'></a>
        </div>
        <div className='links'>
            <a href="#">home</a>
            <a href="#">about us</a>
            <a href="#">menu</a>
            <a href="#">products</a>
            <a href="#">review</a>
            <a href="#">contact</a>
            <a href="#">blogs</a>
        </div><div className='credit'>created by <span>priyanka dubey</span></div>
    </section>
  )
}

export default Footer;