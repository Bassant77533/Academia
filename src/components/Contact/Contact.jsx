import React from 'react'
import Back from '../Back'
import "./contact.css"
import Footer from '../Footer/Footer'
const Contact = () => {
    const location = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.9060414161017!2d29.970349275394533!3d31.251024274338356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c51384641423%3A0xbe7181447961f33b!2sArac!5e0!3m2!1sen!2seg!4v1733333265504!5m2!1sen!2seg" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade '
  return (
    <div className='contact-us    '>
      <Back title={"Contact Us"}/>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 p-0'>
                <iframe src={location} width={"100%"} height={"100%"}></iframe>
            </div>
            <div className='col-lg-6 bg-white p-5'>
                <div className='data'>
                    <h1>Contact us </h1>
                    <p className='text-black-50'>We're open for any suggestion or just to have a chat</p>
                    <div className='contact-info row my-3'>
                        <div className='col-lg-4'>
                            <h5>Address</h5>
                            <p className='text-black-50'>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        <div className='col-lg-4'>
                            <h5>Email</h5>
                            <p className='text-black-50'>info@yoursite.com</p>
                        </div>
                        <div className='col-lg-4'>
                            <h5>Phone</h5>
                            <p className='text-black-50'>+ 1235 2355 98</p>
                        </div>
                    </div>
                    <form>
                        <div className='mb-3 d-flex gap-2'>
                            <input type='text' className='form-control' id='name' placeholder='Name' required/>
                            <input type='email' id='email' className='form-control' placeholder='Email'  required/>
                        </div>
                        <input  type='text' className='mb-3 form-control' id='name' placeholder='Subject' required/>
                        <div className='mb-3'>
                            <textarea style={{height : "120px" , resize : "none"}} className='form-control' id='message' placeholder='Message' required></textarea>
                        </div>
                        <button  className='btn main-button my-3'>Send Message</button>
                    </form>
                    <h3>Follow us here</h3>
                    <p className='social-name'>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</p>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
