import styles from "./footer.module.css"
import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerListItem}><a className={styles.footerListLink}>About Us</a></li>
        <li className={styles.footerListItem}><a className={styles.footerListLink}>Privacy Policy</a></li>
        <li className={styles.footerListItem}><a className={styles.footerListLink}>Terms of Service</a></li>
        <li className={styles.footerListItem}><a className={styles.footerListLink}>Contact Us</a></li>
      </ul>
      <p className={styles.footerCopyright}>&copy; 2024 [Your Company Name]. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
