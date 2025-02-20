import clsx from 'clsx';
import { ComponentProps } from 'react';

import styles from './CloseIcon.module.css';

const CloseIconColor = {
  basket: '#141C24',
  card: '#CED2DA'
};

interface CloseIconProps extends ComponentProps<'svg'> {
  CloseIconVariant: 'card' | 'basket';
}

export const CloseIcon = ({ CloseIconVariant: color, className, ...props }: CloseIconProps) => (
  <svg
    className={clsx(styles.svg, className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.085 3.53014C20.7923 3.23741 20.3177 3.2374 20.025 3.53011L12.306 11.2481L4.5965 3.53675C4.30356 3.24374 3.82852 3.24383 3.53569 3.53694C3.2431 3.8298 3.24318 4.30436 3.53587 4.59712L11.246 12.3091L3.52997 20.0252C3.23719 20.3179 3.23697 20.7925 3.52947 21.0856C3.82238 21.3791 4.29781 21.3793 4.59097 21.086L12.306 13.3691L20.032 21.0942C20.3247 21.3869 20.7993 21.3868 21.092 21.0941C21.3847 20.8014 21.3847 20.3268 21.092 20.0341L13.368 12.3091L21.0851 4.59017C21.3778 4.29742 21.3777 3.82285 21.085 3.53014Z"
      fill={CloseIconColor[color]}
    />
  </svg>
);
