import Layout from "./layout";
import SalesPerformance from "./components/sales-performance/sales-performance";
import InventoryManagement from "./components/inventory-management/inventory-management";
import OrderingAndDelivery from "./components/ordering-and-delivery/ordering-and-delivery";
import styles from './page.module.css';

export default function Page() {
    return (
      <div className={styles.container}>
        <h1>Dashboard</h1>
        <div className={styles.section}>
          <SalesPerformance />
        </div>
        <div className={styles.section}>
          <InventoryManagement />
        </div>
        <div className={styles.section}>
          <OrderingAndDelivery />
        </div>
      </div>
    )
  }