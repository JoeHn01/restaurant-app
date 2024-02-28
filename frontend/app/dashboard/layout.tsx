import Sidebar from './components/side-nav/side-nav';
import styles from './layout.module.css';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}