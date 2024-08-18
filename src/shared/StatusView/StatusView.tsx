import clsx from 'clsx';

import { CircleColorVariant, CircleIcon } from '../../components/icons';
import { Typhography } from '../Typhography/Typhography';
import styles from './StatusView.module.css';

export type StatusViewVariant = 0 | 1 | 2 | 3 | 4;

interface StatusViewProps extends React.ComponentProps<'div'> {
  status: StatusViewVariant;
}

export const StatusView = ({ status, className, ...props }: StatusViewProps) => {
  const StatusToString = [
    ['оформлен', 'attention'],
    ['готовится', 'attention'],
    ['в пути', 'attention'],
    ['доставлен', 'positive'],
    ['отменен', 'negative']
  ];

  return (
    <Typhography variant="paragraph16-regular" className={clsx(className, styles.container)} {...props}>
      <div className={styles.icon}>
        <CircleIcon color={StatusToString[status][1] as CircleColorVariant} />
      </div>
      {`Заказ ${StatusToString[status][0]}`}
    </Typhography>
  );
};
