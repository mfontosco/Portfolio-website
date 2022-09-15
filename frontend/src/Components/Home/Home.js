import React from "react";
import styles from "./Home.module.css";
import mstrings from "../../img/mstrings.png";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.home}>
        <div className={styles.profileImg}>
          <img src={mstrings} alt="mstrings" srcSet="" />
        </div>
        <div className={styles.content}>
          <div className={styles.contentcenter}>
            <div className={styles.heading}>
              <h2 className={styles.name}>I'M MFON PAULINUS.</h2>
              <h2>A WEB DEVELOPER</h2>
            </div>
            <p>
              I'm a Nigerian based frontend and backend developer focused on
              crafting clean and user friendly experiences,I'm passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <Link to='/about'>
            <button>MORE ABOUT ME</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className={styles.home} id="home" >
                <div className={styles.profileImg}>
                  
            </div>
            <div className={styles.content>
                <div className={styles.contentcenter}>
                    <div className={styles.heading}>
                    <h2 className={styles.name}>I'M MFON PAULINUS.</h2>
                     <h2>A WEB DEVELOPER</h2>
                  </div>
                   <p>I'm a Nigerian based frontend and backend developer focused on crafting clean and user friendly experiences,I'm passionate about building excellent software that improves the lives of those around me.</p>
                   <button>MORE ABOUT ME</button>
                </div>
                </div> */
}
