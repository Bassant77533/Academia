import React from 'react'
import { useLocation } from 'react-router-dom'

const Back = ({title}) => {
    const location = useLocation(); 
  return (
    <>
        <section className='back text-center text-light'>
            <div className='text'>
            <h2 className='text-uppercase fs-6'>Home / {location.pathname.split("/")[1]}</h2>
            <h1>{title}</h1>
            </div>
        </section>
        <div className='margin'></div>
    </>
    
  )
}

export default Back
