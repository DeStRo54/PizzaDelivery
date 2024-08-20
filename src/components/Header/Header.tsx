import { Link, useNavigate } from 'react-router-dom';

import { useAppStore } from '../../utils/store';
import { ExitIcon, GroupIcon, LogoIcon, TimeIcon, UserIcon } from '../icons';
import { auth, cart, catalog, orders, profile } from './constants';
import styles from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAppStore();
  const navigate = useNavigate();

  const setAuthStatus = () => {
    if (isLoggedIn) useAppStore.setState({ logOut: true });
    else {
      navigate(auth);
    }
  };

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
            <a onClick={setAuthStatus}>
              <ExitIcon />
              {isLoggedIn ? 'Выйти' : 'Войти'}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
