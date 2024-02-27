import styles from "./menu.module.css"
import React from 'react'

const Menu = () => {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.menuImage}></div>
      <h2 className={styles.menuCategory}>Category Name</h2>
      <div className={styles.menuItems}>
        <div className={styles.menuItem}>
          <img className={styles.menuItemImage} src="empty-image.jpg"/>
          <h3 className={styles.menuItemName}>Item Name</h3>
          <p className={styles.menuItemDescription}>Item Description</p>
          <span className={styles.menuItemPrice}>Item Price</span>
        </div>
        <div className={styles.menuItem}>
          <img className={styles.menuItemImage} src="empty-image.jpg"/>
          <h3 className={styles.menuItemName}>Item Name</h3>
          <p className={styles.menuItemDescription}>Item Description</p>
          <span className={styles.menuItemPrice}>Item Price</span>
        </div>
        <div className={styles.menuItem}>
          <img className={styles.menuItemImage} src="empty-image.jpg"/>
          <h3 className={styles.menuItemName}>Item Name</h3>
          <p className={styles.menuItemDescription}>Item Description</p>
          <span className={styles.menuItemPrice}>Item Price</span>
        </div>
      </div>
      <h2 className={styles.menuCategory}>Category Name</h2>
      <div className={styles.menuItems}>
        <div className={styles.menuItem}>
          <img className={styles.menuItemImage} src="empty-image.jpg"/>
          <h3 className={styles.menuItemName}>Item Name</h3>
          <p className={styles.menuItemDescription}>Item Description</p>
          <span className={styles.menuItemPrice}>Item Price</span>
        </div>
        <div className={styles.menuItem}>
          <img className={styles.menuItemImage} src="empty-image.jpg"/>
          <h3 className={styles.menuItemName}>Item Name</h3>
          <p className={styles.menuItemDescription}>Item Description</p>
          <span className={styles.menuItemPrice}>Item Price</span>
        </div>
        <div className={styles.menuItem}>
          <img className={styles.menuItemImage} src="empty-image.jpg"/>
          <h3 className={styles.menuItemName}>Item Name</h3>
          <p className={styles.menuItemDescription}>Item Description</p>
          <span className={styles.menuItemPrice}>Item Price</span>
        </div>
      </div>
      <button className={styles.menuButton}>View Full Menu</button>
    </section>
  )
}

export default Menu