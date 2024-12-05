import React from 'react'
import Title from '../Title'
import PriceCard from '../pricing/PriceCard' 
const HPricing = () => {
  return (
    <div className='container pricing my-5'>
    <Title mainHeading={"OUR PRICING"} description={"Pricing & Packages"} />
    <div className='row'>
      <PriceCard/>
    </div>
  </div>
  )
}

export default HPricing
