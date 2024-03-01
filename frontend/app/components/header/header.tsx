"use client"

import styles from "./header.module.css"
import React from 'react'

const Header = () => {
  const handleNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default jumping behavior
    const targetSectionId = event.currentTarget.textContent?.toLowerCase(); // Extract section ID (lowercase)
    if (targetSectionId) {
      const targetElement = document.getElementById(targetSectionId);
      if (targetElement) {
        // Smooth scrolling to target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Handle case where element might not exist
        console.warn(`Element with ID '${targetSectionId}' not found.`);
      }
    }
  };

  return (
    <header id="header" className={styles.header}>
      <a className={styles.logo} href="/">
        <img className={styles.logoImage} src="empty-image.jpg" />
      </a>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a className={styles.navLink} onClick={handleNavigationClick}>Home</a></li>
          <li className={styles.navItem}><a className={styles.navLink} onClick={handleNavigationClick}>About</a></li>
          <li className={styles.navItem}><a className={styles.navLink} onClick={handleNavigationClick}>Menu</a></li>
          <li className={styles.navItem}><a className={styles.navLink} onClick={handleNavigationClick}>Gallery</a></li>
          <li className={styles.navItem}><a className={styles.navLink} onClick={handleNavigationClick}>Contact</a></li>
          <li className={styles.navItem}><a className={styles.navLink} onClick={handleNavigationClick}>Footer</a></li>
        </ul>
      </nav>
      <a className={styles.headerLink} href="/online-ordering">
        <button className={styles.headerButton}>Place an Order</button>
      </a>
    </header>
  )
}

export default Header