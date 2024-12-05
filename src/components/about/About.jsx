import React from 'react'
import Back from '../Back'
import AboutCard  from './AboutCard'
import AboutWrapper from './AboutWrapper'
import Footer from '../Footer/Footer'
const About = () => {
  return (
    <div>
        <Back title = {"About Us "} />
        <AboutCard/>
        <AboutWrapper/>
        <Footer/>
    </div>
  )
}

export default About;
