import clsx from 'clsx';
import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, className, error, ...props }, ref) => {
  const id = React.useId();
  return (
    <div className={clsx(styles.container, !!error && styles.error)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input type="text" className={clsx(styles.input, className)} {...props} id={id} ref={ref} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
});
