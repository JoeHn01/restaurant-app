import React from 'react';
import styles from './sales-performance.module.css';

const SalesPerformance: React.FC = () => {
  // Dummy data
  const totalRevenue = 1500.50;
  const averageOrderValue = 25.00;
  const totalOrders = 60;
  const salesByCategory = [
    { category: "Appetizers", revenue: 300.00 },
    { category: "Entrees", revenue: 800.50 },
    { category: "Desserts", revenue: 400.00 }
  ];

  return (
    <div className={styles['sales-performance']}>
      <h2>Sales Performance</h2>
      <div>
        <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
        <p>Average Order Value: ${averageOrderValue.toFixed(2)}</p>
        <p>Total Orders: {totalOrders}</p>
        <h3>Sales by Category:</h3>
        <ul>
          {salesByCategory.map((item, index) => (
            <li key={index}>
              <strong>{item.category}:</strong> ${item.revenue.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SalesPerformance;