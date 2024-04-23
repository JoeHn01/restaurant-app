import styles from "./header.module.css"
import HeaderNav from "./headerNav/headerNav"
import React from 'react'

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <a className={styles.logo} href="/">
        <img className={styles.logoImage} src="empty-image.jpg" />
      </a>
      <HeaderNav />
      <a className={styles.headerLink} href="/online-ordering">
        <button className={styles.headerButton}>Place an Order</button>
      </a>
    </header>
  )
}

export default Header