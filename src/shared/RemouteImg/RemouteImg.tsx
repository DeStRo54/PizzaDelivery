import clsx from 'clsx';

import styles from './RemouteImg.module.css';

type RemouteImgVariant = 'card' | 'topping' | 'cart';

export interface RemouteImgProps extends React.ComponentProps<'img'> {
  src: string;
  variant: RemouteImgVariant;
}

export const RemouteIng = ({ src, variant, className, ...props }: RemouteImgProps) => (
  <img src={import.meta.env.VITE_BACKEND_URL + src} {...props} className={clsx(styles[variant], className)} />
);
