import clsx from 'clsx';

import { PizzaParamsTabs } from '../../utils/helpers/Translater';
import styles from './RadioSlider.module.css';

export type TabsElement = PizzaSize | PizzaDough;

type TabsVariant = 'slider-change';

export type TabsProps = {
  elements: TabsElement[];
  variant: TabsVariant;
  activate: string;
  onClick: (a: TabsElement) => void;
};

export const Tabs = ({ elements, variant, onClick, activate }: TabsProps) => (
  <div className={styles.container}>
    {elements.map((elem, i) => (
      <label key={i} className={clsx(styles[variant], elem.name === activate && styles.active)} htmlFor={elem.name}>
        {PizzaParamsTabs[elem.name]}
        {<input className={styles.input} type="radio" name={activate} id={elem.name} onChange={() => onClick(elem)} />}
      </label>
    ))}
  </div>
);
