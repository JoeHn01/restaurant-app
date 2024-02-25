import styles from "./header.module.css"
import React from 'react'

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo}>Logo</a>
      <nav>
        <ul className={styles.navlist}>
          <li className={styles.navitem}><a className={styles.navlink} href="#hero">Home</a></li>
          <li className={styles.navitem}><a className={styles.navlink} href="#about">About</a></li>
          <li className={styles.navitem}><a className={styles.navlink} href="#menu">Menu</a></li>
          <li className={styles.navitem}><a className={styles.navlink} href="#gallery">Gallery</a></li>
          <li className={styles.navitem}><a className={styles.navlink} href="#contact">Contact</a></li>
          <li className={styles.navitem}><a className={styles.navlink} href="#footer">Footer</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header