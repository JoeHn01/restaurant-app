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
      <a className={styles.logo}>Logo</a>
      <nav>
        <ul className={styles.navlist}>
          <li className={styles.navitem}><a className={styles.navlink} onClick={handleNavigationClick}>Home</a></li>
          <li className={styles.navitem}><a className={styles.navlink} onClick={handleNavigationClick}>About</a></li>
          <li className={styles.navitem}><a className={styles.navlink} onClick={handleNavigationClick}>Menu</a></li>
          <li className={styles.navitem}><a className={styles.navlink} onClick={handleNavigationClick}>Gallery</a></li>
          <li className={styles.navitem}><a className={styles.navlink} onClick={handleNavigationClick}>Contact</a></li>
          <li className={styles.navitem}><a className={styles.navlink} onClick={handleNavigationClick}>Footer</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header