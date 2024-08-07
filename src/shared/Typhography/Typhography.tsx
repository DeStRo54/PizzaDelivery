import clsx from 'clsx';

import styles from './Typhography.module.css';

type TyphographyTag = 'p' | 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TyphographyVariant = 'title-form' | 'title' | 'paragraph14-regular' | 'paragraph16-regular' | 'pizza-tag';

export type TyphographyProps<Tag extends TyphographyTag> = React.ComponentProps<Exclude<Tag, 'span'>> & {
  tag?: TyphographyTag;
  variant: TyphographyVariant;
  children: React.ReactNode;
};

export const Typhography = <Tag extends TyphographyTag>({
  tag = 'div',
  variant,
  children,
  className,
  ...props
}: TyphographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
