import clsx from 'clsx';
import React from 'react';

import styles from './Input.module.css';

type InputProps<Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
  React.ComponentProps<'input'> & {
    label?: string;
    error?: string;
    component?: Component;
  } & React.ComponentProps<Component>;

export const Input = React.forwardRef(
  (
    { component, label, className, id: externalId, error, ...props }: InputProps<'input'>,
    ref?: React.ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = React.useId();
    const id = externalId ?? internalId;
    const Component = component ?? 'input';
    return (
      <div className={clsx(styles.container, !!error && styles.error)}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <Component type="text" className={clsx(styles.input, className)} {...props} id={id} ref={ref} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: React.RefAttributes<HTMLInputElement> }
) => React.ReactElement;
