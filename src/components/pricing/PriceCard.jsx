import React from 'react'
import {price} from '../../dummydata'
import './price.css'
const PriceCard = () => {
  return (
    <>
      {price.map((val)=>{
        return(
            <div className='price col-lg-3 col-md-6 my-3'>
                <div className='price-box text-center p-3 shadow'>
                    <p className='my-3 fw-bold'>{val.name}</p>
                    <h1 className='amount  my-3'>{val.price}</h1>
                    <p className='text-black-50 my-5 lh-lg'>{val.desc}</p>
                    <button className='btn my-3'>Choose Plan</button>
                </div>
            </div>
        )
      })}
   </>
  )
}

export default PriceCard
