import { MinusIcon } from '../../components/icons';
import { PlusIcon } from '../../components/icons/PlusIcon/PlusIcon';
import styles from './Counter.module.css';

export interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => (
  <div className={styles.container}>
    <MinusIcon className={styles.icon} onClick={onDecrement} />
    <p>{value}</p>
    <PlusIcon className={styles.icon} onClick={onIncrement} />
  </div>
);
