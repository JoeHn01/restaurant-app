import styles from "./contact.module.css"
import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactImage}></div>
      <h2 className={styles.contactHeading}>Contact Us</h2>
      <p className={styles.contactSubheading}>Get in touch and explore how we can help you.</p>

      <form className={styles.contactForm}>
        <label htmlFor="name" className={styles.contactFormLabel}>Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required className={styles.contactFormInput} />

        <label htmlFor="email" className={styles.contactFormLabel}>Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address" required className={styles.contactFormInput} />

        <label htmlFor="message" className={styles.contactFormLabel}>Message</label>
        <input id="message" name="message" placeholder="Write your message here..." required className={styles.contactFormTextbox}></input>

        <button className={styles.contactFormButton}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
