import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.home} to="/">Home</Link>
        <Link className={styles.about}  to="/about">About</Link>
        <Link className={styles.portfolio}  to="/portfolio">Portfolio</Link>
        <Link className={styles.contact}  to="/contact">Contact</Link>
    </div>
  )
}

export default Navigation