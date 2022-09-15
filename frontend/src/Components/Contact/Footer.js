import React from 'react'
import styles from './Contact.module.css'
import {
    FaInstagram,
    FaTwitterSquare,
    FaYoutube,
    FaFacebookSquare,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footericons}>
              <FaFacebookSquare className={styles.socials} size={28} />
              <FaTwitterSquare className={styles.socials}  size={28} />
              <FaYoutube className={styles.socials}  size={28} />
              <FaInstagram className={styles.socials}  size={28} />
            </div>
    </div>
  )
}

export default Footer