import React from 'react'
import styles from "./cart.module.css"

const Cart = ({ cartItems }: any) => {
  // Check if there are any items in the cart
  if (!cartItems || cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Cart</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item: any) => (
          <li className={styles.cartItem} key={item.id}>
            {/* Display item details based on your data structure */}
            <p>{item.name} - ${item.price}</p>
            {/* Add buttons or links for quantity adjustment and removal */}
            <button className={styles.removeButton}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
