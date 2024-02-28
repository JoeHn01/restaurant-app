// Dashboard.tsx (or any other page/component)
import React from 'react';
import MenuOverview from './components/menu-overview/menu-overview';
import PopularDishes from './components/popular-dishes/popular-dishes';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Menu</h1>
      <MenuOverview />
      <PopularDishes />
    </div>
  );
};

export default Dashboard;
