import React from 'react'
import styles from './Portfolio.module.css'
import Navigation from '../Navigation/Navigation'
import  BookReview from '../../img/BookReview.png'
import  LoginPostJs from '../../img/LoginPostJs.png'
import  MERNRegistration from '../../img/MERN-Registration-Login-Auth-form.png'
import  weatherapp from '../../img/weatherapp.png'
import  worldcountries from '../../img/worldcountries.png'
import  planetweight from '../../img/planet-weight.png'

const Portfolio = () => {
  return (
    <div className={styles.container}>
    <Navigation/>
        <article className={styles.portfolioContainer} >
        <h2>MY <span>PORTFOLIO</span></h2>
        {/* <div className={styles.portfolionavbar}>
            <ul>
                <li id="all">All</li>
                <li>E-commerce</li>
                <li>Finance</li>
                <li>Personal</li>
            </ul>
        </div> */}
        <div className={styles.portfolioContent}>
            <div>
            <div className={styles.description}>
                <p>This Book Review app was  built with html,css,and Javascript</p>
            </div>
                <div className={styles.image}>
                <div className={styles.title}><h4>Book Review App</h4></div>
                    <img src={BookReview} alt="Book-Review"/>
                </div>
            </div>
            <div>

            <div  className={styles.image}>
                <div className={styles.title}><h4>MERN Registration-form</h4></div>
                    <img src={MERNRegistration} alt="MongoDB"/>
                    
                </div>
            <div className={styles.description}>
                <p>This Mern Registration signup and login form was created using ReactJs,MongoDB,Express,and NodeJs</p>
            </div>
               
              
            </div>
            <div>
            <div className={styles.description}>
                <p>This World Countries Project was created using pure vanilla Js,Html and Css.Also made used the world countries Api.This app was built in order for users to be able to search for a particular country or countries using its starting word and words. </p>
            </div>
                <div  className={styles.image}>
                <div className={styles.title}><h4>World countries Project</h4></div>
                    <img src={worldcountries} alt="Countries App"/>
                    
                </div>
                
            </div>
            <div>
           
                <div  className={styles.image}>
                <div className={styles.title}><h4>Login/Post Project</h4></div>
                    <img src={LoginPostJs} alt="Login-Post"/>
                </div>
                <div className={styles.description}>
                <p>This is a Post project in which a user has to be loggedin to be able to create a post.It was created with Vanilla JavaScript and I alse into intergrated the endpoint of users from Jsonplaceholder.typicode.com</p>
            </div>
            </div>
            <div>
            <div className={styles.description}>
                <p>This weather app was created with Vanilla Js,styled with Css and BootStrap.Open Weather Api was integrated in order for one to get the actual weather condition of a place.I also itegrated a google search for users to know more about the location/city.</p>
            </div>
                <div  className={styles.image}>
                <div className={styles.title}><h4>Weather App Project</h4></div>
                    <img src={weatherapp} alt="WeatherImg"/>
                   
                </div>
               
            </div>
            <div>
                <div  className={styles.image}>
                <div className={styles.title}><h4>Planet-weight Calculator</h4></div>
                    <img src={planetweight} alt="Planet-weight"/>  
                
                </div>
                <div className={styles.description}>
                <p>This Planet Calculator was created with Vanilla Js,styled with Css.This app calculates the weight of every planet using the mass Api of each planet. </p>
            </div>
            </div>
           
        </div>
      </article>
    </div>
  )
}

export default Portfolio