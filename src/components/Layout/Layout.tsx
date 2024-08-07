import { Header } from '../Header/Header';
import { PizzaOutlet } from '../PizzaOutlet/PizzaOutlet';
import styles from './Layout.module.css';

export const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.container}>
      <PizzaOutlet />
    </div>
  </div>
);
