import clsx from 'clsx';
import { ComponentProps } from 'react';

import styles from './PlusIcon.module.css';

export const PlusIcon = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(styles.svg, className)}
    {...props}
  >
    <path
      d="M3.58705 7.63967V0.139665H4.85977V7.63967H3.58705ZM0.473411 4.52603V3.2533H7.97341V4.52603H0.473411Z"
      fill="#141C24"
    />
  </svg>
);
