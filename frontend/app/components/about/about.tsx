import styles from "./about.module.css"
import React from 'react'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.aboutHeading}>About Us</h2>
      <p className={styles.aboutSubheading}>
        [Insert a brief description of your company, its mission, and values. Briefly explain what makes your company unique and why customers should choose you.]
      </p>
      <h2 className={styles.aboutHeading}>Our Story</h2>
      <p className={styles.aboutSubheading}>
        [Share a more detailed story about your company's origin, journey, and milestones. Highlight any achievements or contributions that resonate with your audience.]
      </p>
      <h2 className={styles.aboutHeading}>Our Team</h2>
      <div className={styles.team}>
        <div className={styles.teamMember}>
          <img className={styles.teamMemberImage} src="empty-image.jpg" />
          <h4>First Last</h4>
          <p>Position</p>
        </div>
        <div className={styles.teamMember}>
          <img className={styles.teamMemberImage} src="empty-image.jpg" />
          <h4>First Last</h4>
          <p>Position</p>
        </div>
        <div className={styles.teamMember}>
          <img className={styles.teamMemberImage} src="empty-image.jpg" />
          <h4>First Last</h4>
          <p>Position</p>
        </div>
      </div>
      <button className={styles.aboutButton}>Join The Team</button>
  </section>
  )
}

export default About
