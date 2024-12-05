import React from 'react'
import {testimonal} from '../../dummydata'
import Title from '../Title'
import './test.css'
const Test = () => {
  return (
    <div className='testmonial container text-center'>
        <Title mainHeading={"Testmonial"} description={"Our Successful Students"}/>
        <div className='row my-5'> 
          
              {testimonal.map((val)=>{
                return(
                  <div className='col-lg-4'>
                  <div className='box p-4'>
                  <div className='member'>
                    <div className='image d-flex gap-2 align-items-center position-relative'>
                      <img className='img-fluid' src={val.cover} alt='member'/>
                      <i class="quote fa fa-quote-left icon"></i>
                      <div>
                        <h5 className='name'>{val.name}</h5>
                        <p className='position'>{val.post}</p>
                      </div>
                    </div>
                    <div className='text mt-3'>
                      <p className='text-black-50  fs-5 lh-base text-start'> {val.desc}</p>
                    </div>
                  </div>
                  </div>
                  </div>
                )
              })}
        </div>
    </div>
  )
}

export default Test
