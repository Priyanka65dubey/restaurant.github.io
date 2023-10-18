import React from 'react'

const Contact = () => {
  return (
    <section className='contact'id="contact">
        <h1 className='heading'>
          <span>contact</span>us
        </h1>
        <div className='row'>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28492.60978374766!2d82.19916785!3d26.7897752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696956118173!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form>
          <h3>
            get in touch
          </h3>
          <div className='inputbox'>
            <span className='fas fa-user'></span>
            <input type="text"placeholder='name'/>
          </div>
          <div className='inputbox'>
            <span className='fas fa-envelope'></span>
            <input type="email"placeholder='email'/>
          </div>
          <div className='inputbox'>
            <span className='fas fa-phone'></span>
            <input type="number"placeholder='number'/>
          </div>
          <input type="submit"value="contact now" className='btn'/>
        </form>
        </div>
    </section>
  )
}

export default Contact