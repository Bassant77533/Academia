import React from 'react'
import {awrapper} from '../../dummydata'
import './about.css'
const AboutWrapper = () => {
  return (
    <div>
        <section className ='about-wrapper py-5  '>
            <div className='container'>
                <div className='row'>
                    {awrapper.map((val)=>{
                        return(
                        <div className='about-data col-md-6 col-lg-3 d-flex gap-3 align-items-center text-light p-4 '>
                            <img className='about-img' src={val.cover} alt='about' />
                            <div className='content text-center'>
                                <h1>{val.data}</h1>
                                <p className='mb-0'>{val.title}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutWrapper
