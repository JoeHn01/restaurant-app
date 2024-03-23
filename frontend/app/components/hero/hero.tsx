import styles from "./hero.module.css"
import React from 'react'

const Hero = () => {
  return (
    <div id="home" className={styles.hero}>
      <img className={styles.heroImage} />
      <h1 className={styles.heroHeading}>Welcome to Our Website!</h1>
      <p className={styles.heroSubheading}>
        Discover a world of [insert your product/service type] and explore
        everything we offer.
      </p>
      <button className={styles.heroButton}>Explore More</button>
    </div>
  )
}

export default Hero