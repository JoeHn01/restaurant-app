import React from 'react';
import styles from "./menu.module.css";

const Menu = () => {
  // Define your menu items categorized by their respective categories
  const menuItems = {
    "Appetizers": [
      { name: "Nachos", price: "$8.99" },
      { name: "Chicken Wings", price: "$10.99" },
      { name: "Onion Rings", price: "$7.99" },
      { name: "Mozzarella Sticks", price: "$6.99" },
    ],
    "Main Course": [
      { name: "Burger", price: "$12.99" },
      { name: "Pizza", price: "$14.99" },
      { name: "Pasta", price: "$11.99" },
      { name: "Steak", price: "$18.99" },
    ],
    "Desserts": [
      { name: "Cheesecake", price: "$6.99" },
      { name: "Ice Cream Sundae", price: "$5.99" },
      { name: "Chocolate Cake", price: "$7.99" },
      { name: "Apple Pie", price: "$6.50" },
    ],
    "Drinks": [
      { name: "Soft Drinks", price: "$2.50" },
      { name: "Juice", price: "$3.00" },
      { name: "Coffee", price: "$2.00" },
      { name: "Tea", price: "$1.50" },
    ],
  };

  const handleAddToCart = () => {
    
  }

  return (
    <div className={styles.menu}>
      <img className={styles.menuImage} />
      {/* Map over each category and render them */}
      {Object.entries(menuItems).map(([category, items]) => (
        <div className={styles.menuCategory} key={category}>
          <h2 className={styles.menuCategoryName}>{category}</h2>
          {/* Map over each item in the current category and render them */}
          <ul className={styles.menuList}>
            {items.map((item, index) => (
              <li className={styles.menuItem} key={index}>
                <img className={styles.menuItemImage} src="empty-image.jpg"/>
                <span className={styles.menuItemName}>{item.name}</span>
                <span className={styles.menuItemPrice}>{item.price}</span>
                <button className={styles.menuItemButton} onClick={handleAddToCart}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
