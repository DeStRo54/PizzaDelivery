import React from 'react';

import { Button } from '../../../shared/Button/Button';
import { RemouteIng } from '../../../shared/RemouteImg/RemouteImg';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { useGetPizzasQuery } from '../../../utils/api/hooks/useGetPizzasQuery';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import styles from './PizzaCatalog.module.css';

export const PizzaCatalog = () => {
  const { data } = useGetPizzasQuery();
  const [isActive, setIsActive] = React.useState(false);
  const [currentPizza, setCurrentPizza] = React.useState({} as Pizza);

  const PizzaCardClick = (pizza: Pizza) => {
    setCurrentPizza(pizza);
    setIsActive(true);
  };

  {
    isActive ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
  }

  return (
    <div className={styles.layout}>
      <Typhography tag="h2" variant="title" children="Каталог" className={styles.title} />
      <ul className={styles.container}>
        {data?.data.catalog.map((pizza) => (
          <li key={pizza.id} className={styles.card}>
            <RemouteIng src={pizza.img} variant="card" />
            <div className={styles['card-info']}>
              <Typhography tag="h3" variant="title" children={pizza.name} />
              <Typhography tag="p" variant="paragraph14-regular" children={pizza.description} />
            </div>
            <div className={styles['card-price-info']}>
              <Typhography tag="p" variant="title" children={`от ${pizza.sizes[0].price}₽`} />
              <Button variant="accept" children="Выбрать" onClick={() => PizzaCardClick(pizza)} />
            </div>
          </li>
        ))}

        {isActive && <PizzaCard pizza={currentPizza} onClose={() => setIsActive(false)} />}
      </ul>
    </div>
  );
};
