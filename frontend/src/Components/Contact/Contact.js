import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./Form";
import Navigation from "../Navigation/Navigation";

import Header from "./Header";
import Address from "./Address";

const Contact = () => {
  return (
    <div  className={styles.container}>
      <Navigation />
      <div  className={styles.container}>
      <Header/>
      <div className={styles.sectioncenter}>
      <Address/>
      <ContactForm />
      </div>
      </div>
       
      
    </div>
  );
};

export default Contact;
