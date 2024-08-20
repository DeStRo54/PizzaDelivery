import { Outlet } from 'react-router-dom';

import { useAppStore } from '../../utils/store';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';
import { LogOutView } from './LogOutView/LogOutView';

export const Layout = () => {
  const { logOut } = useAppStore();

  document.body.style.overflowY = logOut ? 'hidden' : 'auto';

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        {logOut && <LogOutView />}
        <Outlet />
      </div>
    </div>
  );
};
