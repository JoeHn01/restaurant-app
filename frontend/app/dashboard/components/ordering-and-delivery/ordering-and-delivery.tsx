// dashboard/OrderingAndDelivery.tsx

import React from 'react';
import styles from './ordering-and-delivery.module.css';

const OrderingAndDelivery: React.FC = () => {
  // Dummy data
  const totalOrders = 150;
  const averageDeliveryTime = 30; // in minutes
  const deliverySuccessRate = 95; // in percentage
  const mostOrderedItems = [
    { item: "Pizza", orders: 50 },
    { item: "Burger", orders: 30 },
    { item: "Salad", orders: 20 }
  ];

  return (
    <div className={styles['ordering-and-delivery']}>
      <h2>Online Ordering & Delivery</h2>
      <div>
        <p>Total Orders: {totalOrders}</p>
        <p>Average Delivery Time: {averageDeliveryTime} minutes</p>
        <p>Delivery Success Rate: {deliverySuccessRate}%</p>
        <h3>Most Ordered Items:</h3>
        <ul>
          {mostOrderedItems.map((item, index) => (
            <li key={index}>
              <strong>{item.item}:</strong> {item.orders} orders
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderingAndDelivery;
