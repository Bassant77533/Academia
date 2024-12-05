import React from 'react'
import Hero from './Hero'
import AboutCard from '../about/AboutCard'
import AboutWrapper from '../about/AboutWrapper'
import HAbout from './HAbout'
import OnlineCourse from '../AllCourses/OnlineCourse'
import Test from '../testmonial/Test'
import HBlog from './HBlog'
import HPricing from './HPricing'
import Footer from '../Footer/Footer'
const Home = () => {
   return (
    
    <div>
        <Hero/>
        <AboutCard/>
        <AboutWrapper/>
        <HAbout/>
        <OnlineCourse/>
        <Test/>
        <HBlog/>
        <HPricing/>
        <Footer/>
    </div>
  )
}

export default Home
