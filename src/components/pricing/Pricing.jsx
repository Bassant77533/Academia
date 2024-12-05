import React from 'react'
import Back from '../Back'
import PriceCard from './PriceCard' 
import Faq from './Faq'
import Footer from '../Footer/Footer'
const Pricing = () => {
  return (
    <div className='pricing-section'>
      <Back title={"Choose The Right Plan "}/>
      <div className='container pricing'>
        <div className='row'>
          <PriceCard/>
          <Faq/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing
