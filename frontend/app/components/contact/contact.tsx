import styles from "./contact.module.css"
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactImage}></div>
      <h2 className={styles.contactHeading}>Contact Us</h2>
      <p className={styles.contactSubheading}>Get in touch and explore how we can help you.</p>

      <form className={styles.contactForm}>
        <label className={styles.contactFormLabel}>Name</label>
        <input className={styles.contactFormInput} />

        <label className={styles.contactFormLabel}>Email</label>
        <input className={styles.contactFormInput} />

        <label className={styles.contactFormLabel}>Message</label>
        <textarea className={styles.contactFormTextbox}></textarea>

        <button className={styles.contactFormButton}>Submit</button>
      </form>
    </section>
  )
}

export default Contact
