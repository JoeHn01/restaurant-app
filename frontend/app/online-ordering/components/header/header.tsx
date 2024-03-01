import React from 'react';
import styles from './header.module.css';

const Header = () => {

  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.logoImage} src="empty-image.jpg" />
      </a>
      {/* other elements */}
    </header>
  );
};

export default Header;
