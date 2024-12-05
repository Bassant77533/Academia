import React from 'react'
import {coursesCard} from '../../dummydata'
import './courses.css'
const CourseCard = () => {
  return (
    <div className='courses-cards'>
        <div className='container'>
        <div className='row '>
            {coursesCard.map((val)=>{
                return(
                    <div className=' col-lg-4 col-md-6 mb-4 '>
                        <div className='course-card  h-100'>
                        <div className='d-flex justify-content-center align-items-center gap-2 '>
                            <div className='cover'><img className=' ' src={val.cover} alt=''/></div>
                            <h2 >{val.coursesName}</h2>
                        </div>
                        <ul className='stars list-unstyled d-flex justify-content-center gap-2'>
                            {Array(5).fill().map((_, index) => (
                                <li key={index}><i className='fa fa-star'></i></li>
                            ))}
                            (5.0)
                        </ul>
                        <div className='teacher text-center'>
                            {val.courTeacher.map((details)=>{
                                return(
                                    <>
                                    <div className='d-flex gap-2 align-items-center justify-content-center my-2'>
                                        <img className='teacher-img' src={details.dcover} alt=''/>
                                        <h5 className='text-black-50 fs-6'>{details.name}</h5>
                                    </div>
                                    <p>{details.totalTime}</p>
                                    </>
                                )
                            })}
                        </div>
                        <p className='text-center price '>{val.priceAll} / {val.pricePer}</p>
                        <button className='btn '>Enroll Now</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default CourseCard
