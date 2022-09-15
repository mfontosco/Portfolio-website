import React from 'react'
import styles from './Contact.module.css'
import Footer from './Footer'
import Table from './Table'

const Address = () => {
  return (
    <div className={styles.addressContainer}>
  <h2>DON'T BE SHY</h2>
  <p>Feel free to get in touch with me.I'm always open to discussing new projects,creative ideas or opportunities to be part of your visions.</p>
  <Table/>
  <Footer/>
    </div>
  )
}

export default Address