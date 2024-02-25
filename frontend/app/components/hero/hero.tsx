import styles from "./hero.module.css"
import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroImage}></div>
        <h1>Welcome to Our Website!</h1>
        <p className={styles.heroSubheading}>
          Discover a world of [insert your product/service type] and explore
          everything we offer.
        </p>
        <button className={styles.heroButton}>Explore More</button>
      </div>
    </section>
  )
}

export default Hero