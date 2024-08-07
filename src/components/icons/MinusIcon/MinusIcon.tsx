import clsx from 'clsx';
import { ComponentProps } from 'react';

import styles from './MinusIcon.module.css';

export const MinusIcon = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    width="9"
    height="3"
    viewBox="0 0 9 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(styles.svg, className)}
    {...props}
  >
    <path d="M8.72412 0.821483V2.07148H0.724121V0.821483H8.72412Z" fill="#141C24" />
  </svg>
);
