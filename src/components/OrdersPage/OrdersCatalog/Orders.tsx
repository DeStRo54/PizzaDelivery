import { Typhography } from '../../../shared/Typhography/Typhography';
import styles from './Orders.module.css';

export const Orders = () => {
  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title-form" children="Заказы" />
    </div>
  );
};
