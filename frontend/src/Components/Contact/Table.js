import React from 'react'
import styles from './Contact.module.css'
import {
    FaMap,
    FaEnvelope,
    FaPhoneAlt,
  } from "react-icons/fa";

const Table = () => {
  return (
    <div className={styles.tableContainer}>
        <table>
              <tr>
                <td>
                  <FaMap className={styles.icon} size={30} />
                </td>
                <td>
                  <h6>ADDRESS POINT</h6>
                  <p>72 lateef Aregbe street Ago palace way Lagos</p>
                </td>
              </tr>
              <tr>
                <td>
                  <FaEnvelope className={styles.icon} size={30} />
                </td>
                <td>
                  <h6>MAIL ME</h6>
                  <p>mstrings11@gmail.com</p> 
                </td>
              </tr>
              <tr>
                <td>
                  <FaPhoneAlt className={styles.icon} size={30} />
                </td>
                <td>
                  <h6>CALL ME</h6>
                  <p>08135522957</p>
                </td>
              </tr>
            </table>
    </div>
  )
}

export default Table