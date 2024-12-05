import React from 'react'
import './footer.css'
import {blog } from '../../dummydata'
const Footer = () => {
  return (
    <div>
        <section className='news-letter text-white '>
            <div className='container'>
               <div className='row align-items-center my-3 justify-content-between'>
               <div className='col-lg-6  py-5 '>
                    <h3>Newsletter - Stay tune and get the latest update</h3>
                    <p className='mb-0'>Far far away, behind the word mountains</p>
                </div>
               <div className='input mb-2 col-lg-5 d-flex align-items-center '>
                    <input className='message' type='text' placeholder='Enter email address'/>
                    <i  className='fa fa-paper-plane'></i>
                </div>
               </div>
            </div>
        </section>
        <footer className='my-5 py-5'>
          <div className='container'>
            <div className='row'>
              <div className='desc col-lg-3  '>
                <h1 className='text-uppercase fw-bold'>Academia</h1>
                <p>ONLINE EDUCATION & LEARNING</p>
                <p className='text-black-50'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul className='social list-unstyled d-flex gap-3 p-0'>
                  <li><i className='fab fa-facebook-f'></i></li>
                  <li><i className='fab fa-twitter'></i></li>
                  <li><i className='fab fa-instagram'></i></li>
                </ul>
              </div>
              <div className='col-lg-2  explore  '>
                <h4 className='mb-4'>Explore</h4>
                <ul className='list-unstyled'>
                  <li><i className="fa-solid fa-arrow-right"></i> About us</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Services</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Courses</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Blog</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Contact us</li>
                </ul>
              </div>
              <div className='col-lg-2  explore '>
                <h4 className='mb-4'>Quick links</h4>
                <ul className='list-unstyled'>
                  <li><i className="fa-solid fa-arrow-right"></i> Feedbacks</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Terms & conditions</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Pricing</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Privacy</li>
                  <li><i className="fa-solid fa-arrow-right"></i> Contact us</li>
                </ul>
              </div>
              <div className='col-lg-3  explore  flex-grow-1'>
                <h4 className='mb-4'>Recent Post</h4>
                {
                  blog.slice(0,3).map((val)=>{
                    return(
                      <div className='box d-flex mb-3  '>
                        <img  src={val.cover} alt=''/>
                        <div className='list-unstyled content text-uppercase  ms-2'>
                                <span  className='text-black-50 me-2'><i class="me-2 fa-solid fa-user"></i>{val.type}</span>
                                <span className='text-black-50'><i class="me-2 fa-solid fa-calendar-days"></i>{val.date}</span>
                                <p className='text-black-50'>Build your Dream Software & Engineering ...</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='col-lg-2 info'>
                <h4 className='mb-4'>Have a Questions?</h4>
                <p><i class="me-2 fa-solid fa-map"></i>203 Fake St. Mountain View, San Francisco, California, USA</p>
                <p><i class="me-2 fa-solid fa-phone"></i>1-800-EXAMPLE-1234</p>
                <p><i class="me-2 fa-solid fa-paper-plane"></i>Email: info@example.com</p>
              </div>
            </div>
          </div>
        </footer>
        <p className='text-black-50 text-center mb-0 py-5 copy-right'>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by BassantAnsary</p>
    </div>
  )
}

export default Footer
