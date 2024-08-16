import clsx from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './RemouteImg.module.css';

type RemouteImgVariant = 'card' | 'topping' | 'cart';

export interface RemouteImgProps extends React.ComponentProps<'img'> {
  src: string;
  variant: RemouteImgVariant;
}

export const RemouteIng = ({ src, variant, className, ...props }: RemouteImgProps) => (
  <LazyLoadImage
    src={import.meta.env.VITE_BACKEND_URL + src}
    effect="opacity"
    className={clsx(styles[variant], className)}
    {...props}
  />
);
