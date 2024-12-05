import React from 'react'
import Back from '../Back'
import CourseCard from './CourseCard'
import OnlineCourse from './OnlineCourse'
import Footer from '../Footer/Footer'
const CourseHome = () => {
  return (
    <div>
        <Back title={"Explore Courses"}/> 
        <CourseCard/>
        <OnlineCourse/>
        <Footer/>
    </div>
  )
}

export default CourseHome
