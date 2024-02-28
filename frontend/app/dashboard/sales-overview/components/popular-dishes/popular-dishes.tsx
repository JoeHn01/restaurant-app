import React from 'react';
import styles from './popular-dishes.module.css';

const PopularDishes: React.FC = () => {
  // Dummy data for popular dishes
  const popularDishes = [
    { name: 'Shawarma Platter', orders: 120 },
    { name: 'Falafel Wrap', orders: 100 },
    { name: 'Baba Ghanoush', orders: 90 },
    { name: 'Muhammara', orders: 85 },
    { name: 'Hummus with Za\'atar', orders: 80 },
  ];

  return (
    <div className={styles.popularDishes}>
      <h2>Popular Dishes</h2>
      <div className={styles.dishContainer}>
        {popularDishes.map((dish, index) => (
          <div key={index} className={styles.dishCard}>
            <h3>{dish.name}</h3>
            <p>Orders: {dish.orders}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
