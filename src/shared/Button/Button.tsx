import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonVariant = 'accept' | 'cancel' | 'tabs' | 'button-transparent';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ variant, children, className, ...props }: ButtonProps) => (
  <button className={clsx(styles[variant], className, styles.button)} {...props}>
    {children}
  </button>
);
