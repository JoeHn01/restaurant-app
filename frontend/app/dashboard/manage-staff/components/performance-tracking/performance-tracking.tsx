import React from 'react';
import styles from './performance-tracking.module.css';

// Define a type for your performance metric
interface PerformanceMetric {
  id: number;
  date: string;
  staff: string;
  sales: number;
  orders: number;
  rating: number;
}

// Define a type for your grouped metrics object
interface GroupedMetrics {
  [date: string]: PerformanceMetric[];
}

const PerformanceTracking: React.FC = () => {
  // Dummy performance metrics
  const performanceMetrics: PerformanceMetric[] = [
    { id: 1, date: '2024-03-01', staff: 'John Doe', sales: 500, orders: 30, rating: 4.5 },
    { id: 2, date: '2024-03-01', staff: 'Jane Smith', sales: 700, orders: 40, rating: 4.8 },
    { id: 3, date: '2024-03-02', staff: 'Mike Johnson', sales: 400, orders: 25, rating: 4.2 },
    { id: 4, date: '2024-03-02', staff: 'Bob Smith', sales: 600, orders: 35, rating: 4.6 },
    { id: 5, date: '2024-03-03', staff: 'Alice Johnson', sales: 450, orders: 28, rating: 4.4 },
    { id: 6, date: '2024-03-03', staff: 'Emily Davis', sales: 550, orders: 32, rating: 4.7 },
    { id: 7, date: '2024-03-04', staff: 'Robert Wilson', sales: 750, orders: 45, rating: 4.9 },
    { id: 8, date: '2024-03-04', staff: 'Sarah Taylor', sales: 800, orders: 50, rating: 5.0 },
    { id: 9, date: '2024-03-05', staff: 'Michael Garcia', sales: 600, orders: 35, rating: 4.6 },
    { id: 10, date: '2024-03-05', staff: 'Jessica Martinez', sales: 700, orders: 40, rating: 4.8 }
];

  // Group performance metrics by date
  const groupedMetrics: GroupedMetrics = performanceMetrics.reduce((acc, metric) => {
    if (!acc[metric.date]) {
      acc[metric.date] = [];
    }
    acc[metric.date].push(metric);
    return acc;
  }, {} as GroupedMetrics); // Define the initial value as GroupedMetrics

  // Sort the grouped metrics by date, with the most recent date first
  const sortedEntries = Object.entries(groupedMetrics).sort((a, b) => {
    return new Date(b[0]).getTime() - new Date(a[0]).getTime();
  });

  return (
    <div className={styles.performanceTrackingContainer}>
      <h2>Performance Tracking</h2>
      <div className={styles.scrollableContainer}>
        {sortedEntries.map(([date, metrics]) => (
          <div key={date} className={styles.dayContainer}>
            <h3>{date}</h3>
            <ul className={styles.metricsList}>
              {metrics.map(metric => (
                <li key={metric.id} className={styles.performanceMetric}>
                  <strong>Staff:</strong> {metric.staff} |
                  <strong> Sales:</strong> ${metric.sales} |
                  <strong> Orders:</strong> {metric.orders} |
                  <strong> Rating:</strong> {metric.rating}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceTracking;
