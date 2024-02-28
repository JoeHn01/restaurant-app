import React from 'react';
import StaffProfiles from './components/staff-profiles/staff-profiles';
import ShiftManagement from './components/shift-management/shift-management';
import PerformanceTracking from './components/performance-tracking/performance-tracking';
import styles from './styles.module.css';

const CustomersPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Manage Staff</h1>
      <div className={styles.child}>
        <StaffProfiles />
      </div>
      <div className={styles.row2}>
        <div className={styles.child}>
          <ShiftManagement />
        </div>
        <div className={styles.child}>
          <PerformanceTracking />
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
