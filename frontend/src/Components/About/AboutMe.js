import React from 'react'
import styles from './About.module.css'

const AboutMe = () => {
  return (
    <div className={styles.container}>
        <div className={styles.aboutContainer} id="about"  >
        <h1>ABOUT <span>ME</span></h1>
        <div className={styles.aboutcenter}>
            <div className={styles.tablecontainer}>
                <table>
                    <thead>
                        <tr>
                            <th>PERSONAL INFOS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>FirstName: Mfon</td>
                            <td>LastName: Paulinus</td>
                        </tr>
                        <tr>
                            <td>Age: 27years</td>
                            <td>Nationality: Nigerian</td>
                        </tr>
                        <tr>
                            <td>Freelance: Available</td>
                            <td>Address: Lagos</td>
                        </tr>
                        <tr>
                            <td>Phone: 08143764679</td>
                            <td>Email: mstrings11@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Facebook: Paulinus Mfon</td>
                            <td>Languages: English</td>
                        </tr>
                    </tbody>
                </table>
                <button>DOWNLOAD CV<span><a href="https://drive.google.com/file/d/1pmidLuJwLx8yX6JOnDdTCQyT__ifrKob/view?usp=sharing"><i class="fa-solid fa-download"></i></a></span></button>
            </div>
        </div>
     
       
            
    </div>
    </div>
  )
}

export default AboutMe