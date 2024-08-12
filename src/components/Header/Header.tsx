import { Link } from 'react-router-dom';

import { useAuthStore } from '../../utils/stores/AuthStore';
import { ExitIcon, GroupIcon, LogoIcon, TimeIcon, UserIcon } from '../icons';
import { auth, cart, catalog, orders, profile } from './constants';
import styles from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuthStore();
  return (
    <header className={styles.header}>
      <Link to={catalog}>
        <LogoIcon />
      </Link>
      <nav className={styles['header-nav']}>
        <ul className={styles['header-nav-list']}>
          <li className={styles['header-nav-item']}>
            <Link to={isLoggedIn ? profile : auth}>
              <UserIcon />
              Профиль
            </Link>
          </li>
          <li className={styles['header-nav-item']}>
            <Link to={isLoggedIn ? orders : auth}>
              <TimeIcon />
              Заказы
            </Link>
          </li>
          <li style={{ width: '35%' }}></li>
          <li className={styles['header-nav-item']}>
            <Link to={cart}>
              <GroupIcon />
              Корзина
            </Link>
          </li>
          <li className={styles['header-nav-item']}>
            <Link to={isLoggedIn ? catalog : auth}>
              <ExitIcon />
              {isLoggedIn ? 'Выйти' : 'Войти'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
