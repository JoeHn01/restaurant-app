'use client'

import React from 'react';
import Link from 'next/link';
import styles from './side-nav.module.css';

// Define types for sidebar items
type SidebarItem = {
  title: string;
  path: string;
};

// Sample sidebar items
const currentPath = `/dashboard`
const sidebarItems: SidebarItem[] = [
  { title: 'Main Dashboard', path: `${currentPath}` },
  { title: 'View Menu', path: `${currentPath}/menu` },
  { title: 'View Customers', path: `${currentPath}/customers` },
  { title: 'View Orders', path: `${currentPath}/orders` },
  // Add more sidebar items as needed
];

// Sidebar component
const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.path}
              className={styles.sidebarLink}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Add additional sidebar content here if needed */}
    </div>
  );
};

export default Sidebar;
