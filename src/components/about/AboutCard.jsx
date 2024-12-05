import React from 'react'
import Title from '../Title'
import './about.css'
import { homeAbout } from '../../dummydata'
const AboutCard = () => {
  return (
    <div className='aboutCard'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                <img className='about-img ' src="/images/about.webp" alt="about" />
                </div>
                <div className='col-lg-6'>
                    <Title  mainHeading={"LEARN ANYTHING"} description={"Benefits About Online Learning Expertise"} />
                    <div>
                      {homeAbout.map((val)=>{
                        return(
                          <div   className='cards d-flex gap-3  p-4'>
                              <img className='card-img' src={val.cover} alt='cover'/> 
                              <div className='content'>
                                <h5 >{val.title}</h5>
                                <p className='text-black-50 fs-5' >{val.desc}</p>
                              </div>
                          </div>
                        )
                      })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCard
