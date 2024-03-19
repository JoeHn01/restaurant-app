"use client"

import React, { useState, createContext } from 'react'
import styles from "./menuCart.module.css"
import Menu from '../menu/menu';
import Cart from '../cart/cart';

const MenuCartContext = createContext<{
    isMenuActive: boolean;
    setIsMenuActive: (newValue: boolean) => void;
  }>({
    isMenuActive: false,
    setIsMenuActive: () => {},
  });

const MenuCart = () => {
  const [isMenuActive, setIsMenuActive] = useState(true);

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <MenuCartContext.Provider value={{ isMenuActive, setIsMenuActive }}>
      <div className={styles.menuCart}>
        <button className={styles.toggleButton} onClick={handleClick}>{!isMenuActive ? 'View Menu' : 'View Cart'}</button>
        <div className={styles.menuCartContainer}>
          {isMenuActive ? <Menu /> : <Cart />}
        </div>
      </div>
    </MenuCartContext.Provider>
  )
}

export default MenuCart
