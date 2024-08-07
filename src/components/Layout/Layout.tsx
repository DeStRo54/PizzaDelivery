import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import styles from './Layout.module.css';

export const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.container}>
      <Outlet />
    </div>
  </div>
);
