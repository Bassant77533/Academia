import React from 'react'
import './hero.css'
import Title from '../Title'
const Hero = () => {
  return (
    <>
    <div className='hero'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='text col-lg-6'>
                    <Title style={{color:"white"}} mainHeading={"Welcome to Academia"} description={"Best Online Education Expertise"} />
                    <p className='text-light fs-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className='main-button btn'>Get Started now <i className='fa fa-long-arrow-alt-right ms-3'></i></button>
                    <button className='btn'>View Course<i className='fa fa-long-arrow-alt-right ms-3'></i></button>
                </div>
            </div>
        </div>
    </div>
    <div className='margin'></div>
    </>
  )
}

export default Hero
