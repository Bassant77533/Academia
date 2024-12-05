import React from 'react'

const Title = ({mainHeading,description,style}) => {
  return (
    <div className='heading' style={style}>
       <h5 className='text-uppercase'>{mainHeading}</h5>
       <h1>{description}</h1>
    </div>
  )
}

export default Title
