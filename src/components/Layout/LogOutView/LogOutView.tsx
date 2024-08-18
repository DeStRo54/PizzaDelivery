import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/Button/Button';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { LOCALE_STORAGE_KEYS } from '../../../utils/constants';
import { useAuthStore } from '../../../utils/stores/AuthStore';
import { CloseIcon } from '../../icons';
import styles from './LogOutView.module.css';

export const LogOutView = () => {
  const { setLogOut, setIsLoggedIn, setUser } = useAuthStore();
  const navigate = useNavigate();
  const exitClick = () => {
    // navigate('/');
    setLogOut(false);
  };

  const signOut = () => {
    exitClick();
    setIsLoggedIn(false);
    setUser({} as User);
    localStorage.removeItem(LOCALE_STORAGE_KEYS.TOKEN);
    navigate('/');
  };

  return (
    <div className={styles.env}>
      <div className={styles.layout}>
        <div className={styles.header}>
          <CloseIcon CloseIconVariant={'card'} onClick={exitClick} />
        </div>
        <div className={styles.container}>
          <Typhography tag="h2" variant="title-form" children="Выйти из аккаунта?" />
          <Button variant="cancel" onClick={exitClick} children="Отмена" />
          <Button variant="accept" onClick={signOut} children="Выйти" />
        </div>
      </div>
    </div>
  );
};
