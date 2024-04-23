"use client"

import styles from "./headerNav.module.css"
import React from 'react'

const HeaderNav = () => {
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
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
    <nav>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={handleNavClick}>Home</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={handleNavClick}>About</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={handleNavClick}>Menu</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={handleNavClick}>Gallery</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={handleNavClick}>Contact</a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={handleNavClick}>Footer</a>
      </li>
    </ul>
    </nav>
  )
}

export default HeaderNav
