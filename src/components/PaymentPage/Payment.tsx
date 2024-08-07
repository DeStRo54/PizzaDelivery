import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { Typhography } from '../../shared/Typhography/Typhography';
import styles from './Payment.module.css';

export const Payment = () => (
  <div className={styles.layout}>
    <Typhography tag="h2" variant="title" children="Введите данные карты для оплаты" className={styles.title} />
    <form className={styles.container}>
      <div className={styles['data-container']}>
        <Input label="Номер*" placeholder="0000 0000" />
        <div className={styles['input-container']}>
          <Input label="Срок*" placeholder="00/00" />
          <Input label="CVC*" placeholder="000" />
        </div>
      </div>
      <Button type="submit" variant={'accept'} children={'Оплатить'} />
    </form>
  </div>
);
