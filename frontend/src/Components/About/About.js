import React from 'react'
import styles from './About.module.css'
import Navigation from '../Navigation/Navigation'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'

const About = () => {
  return (
    <div className={styles.aboutMainContainer}>
    <Navigation/>
         <AboutMe/>
         <Skills/>
         <Education/>
    </div>
  )
}

export default About