import React from 'react';
import styles from './inventory-management.module.css';

const InventoryManagement: React.FC = () => {
  // Dummy data
  const inventoryTurnover = 3.5;
  const stockLevels = [
    { item: "Tomatoes", quantity: 100 },
    { item: "Flour", quantity: 50 },
    { item: "Chicken", quantity: 20 }
  ];
  const ingredientUsage = [
    { item: "Tomatoes", usage: 10 },
    { item: "Flour", usage: 5 },
    { item: "Chicken", usage: 8 }
  ];
  const stockOutIncidents = [
    { item: "Tomatoes", incidents: 2 },
    { item: "Flour", incidents: 0 },
    { item: "Chicken", incidents: 1 }
  ];

  return (
    <div className={styles['inventory-management']}>
      <h2>Inventory Management</h2>
      <div>
        <p>Inventory Turnover: {inventoryTurnover.toFixed(2)} times per year</p>
        <h3>Stock Levels:</h3>
        <ul>
          {stockLevels.map((item, index) => (
            <li key={index}>
              <strong>{item.item}:</strong> {item.quantity} units
            </li>
          ))}
        </ul>
        <h3>Ingredient Usage:</h3>
        <ul>
          {ingredientUsage.map((item, index) => (
            <li key={index}>
              <strong>{item.item}:</strong> {item.usage} units per day
            </li>
          ))}
        </ul>
        <h3>Stock-out Incidents:</h3>
        <ul>
          {stockOutIncidents.map((item, index) => (
            <li key={index}>
              <strong>{item.item}:</strong> {item.incidents} incidents
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InventoryManagement;
