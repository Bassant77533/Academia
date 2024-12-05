import React from 'react'
import Title from '../Title'
import {online} from '../../dummydata.js'
const OnlineCourse = () => {
  return (
    <div className='onlineCourses py-5 '>
      <div className='container'>
        <Title style={{textAlign : "center "}} mainHeading={"courses"} description={"Browse Our Online Courses"} />
        <div className='row my-5'>
          {online.map((val)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-2  text-center mb-4'>
                    <div className='content'>
                        <div className='img position-relative' src={val.cover} alt="">
                            <img className='' src={val.cover} alt="" ></img>
                            <img className='show' src={val.hoverCover} alt=""></img>
                        </div>
                        <h5 className='mt-3'>{val.courseName}</h5>
                        <p className='mt-3'>{val.course}</p>
                    </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OnlineCourse
