"use client"

import styles from "./gallery.module.css"
import React, { useState } from 'react'

const Gallery = () => {

  const handlePreviousClick = () => {

  };

  const handleNextClick = () => {

  };

  return (
    <div id="gallery" className={styles.gallery}>
      <h2 className={styles.galleryHeading}>Our Work</h2>
      <p className={styles.gallerySubheading}>Take a look at some of our recent projects.</p>

      <div className={styles.galleryGrid}>
        <div className={styles.galleryArrow} onClick={handlePreviousClick}>
          <div className={styles.galleryLeftArrow}></div>
        </div>
        <div className={styles.galleryItem}>
          <img src="empty-image.jpg" className={styles.galleryImage} />
          <p className={styles.galleryCaption}>Project 1 Caption</p>
        </div>
        <div className={styles.galleryItem}>
          <img src="empty-image.jpg" className={styles.galleryImage} />
          <p className={styles.galleryCaption}>Project 2 Caption</p>
        </div>
        <div className={styles.galleryItem}>
          <img src="empty-image.jpg" className={styles.galleryImage} />
          <p className={styles.galleryCaption}>Project 3 Caption</p>
        </div>
        <div className={styles.galleryArrow} onClick={handleNextClick}>
          <div className={styles.galleryRightArrow}></div>
        </div>
      </div>
      <button className={styles.galleryButton}>See More</button>
    </div>
  )
}

export default Gallery
