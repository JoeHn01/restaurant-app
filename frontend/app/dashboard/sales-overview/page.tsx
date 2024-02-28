// Dashboard.tsx (or any other page/component)
import React from 'react';
import SalesOverview from './components/sales-overview/sales-overview';
import PopularDishes from './components/popular-dishes/popular-dishes';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Sales Overview</h1>
      <SalesOverview />
      <PopularDishes />
    </div>
  );
};

export default Dashboard;
