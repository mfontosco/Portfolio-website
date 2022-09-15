import React from 'react'
import styles from './About.module.css'

const Education = () => {
  return (
    <div>
        <div className={styles.education}>
                <h3>EXPERIENCE & EDUCATION</h3>
                <table>
                    <thead>
                        <tr>
                            <td className={styles.educationinfo}>
                                <div className={styles.educationheading}>
                                    <i class="fa-solid fa-envelope"></i> 
                                </div> 
                               <div className={styles.educationinfo}>
                                <h5>2022 -PRESENT</h5>
                                <h5>JUNIOR FRONTEND DEVELOPER</h5>
                               <h5>ITSKILLSCENTER</h5>
                                    
                               </div>
                            </td>
                            <td className={styles.educationinfo}>
                                <div className={styles.educationheading}>
                                    <i className="fa-solid fa-envelope"></i> <h5>2020-2021</h5>
                                   </div>
                                   <div>
                                    <h5>JUNIOR GAME DEVELOPER</h5>
                                    <h5>ENVIVO COMMUNICATIONS</h5>
                                   </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.educationinfo}>
                                <div className={styles.educationheading}>
                                    <i className="fa-solid fa-envelope"></i> <h5>2014</h5>
                                   </div>
                                  <div>
                                    <h5>B.TECH INDUSTRIAL PHYSICS </h5>
                                    <h5>Federal University of Technology Owerri(FUTO)</h5>
                                  </div>
                            </td>
                            <td className={styles.educationinfo} >
                                <div className={styles.educationheading}>
                                    <i className="fa-solid fa-envelope"></i> <h5>2018 -2022</h5>
                                   </div>
                                    <div>
                                        <h5>HIGH SCHOOL TUTOR</h5>
                                        <h5>SEED OF KNOWLEDGE SCHOOLS</h5>
                                   </div>
                            </td>
                        </tr>
                       
                    </thead>
                </table>
        </div>
      </div>

    
  )
}

export default Education