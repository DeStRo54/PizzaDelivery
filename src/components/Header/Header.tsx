import { Link } from 'react-router-dom';

import { ExitIcon, GroupIcon, LogoIcon, TimeIcon, UserIcon } from '../icons';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <LogoIcon />
    </Link>
    <nav className={styles['header-nav']}>
      <ul className={styles['header-nav-list']}>
        <li className={styles['header-nav-item']}>
          <Link to="/profile">
            <UserIcon />
            Профиль
          </Link>
        </li>
        <li className={styles['header-nav-item']}>
          <Link to="/orders">
            <TimeIcon />
            Заказы
          </Link>
        </li>
        <li style={{ width: '35%' }}></li>
        <li className={styles['header-nav-item']}>
          <Link to="/cart">
            <GroupIcon />
            Корзина
          </Link>
        </li>
        <li className={styles['header-nav-item']}>
          <Link to="/auth">
            <ExitIcon />
            Выйти
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
