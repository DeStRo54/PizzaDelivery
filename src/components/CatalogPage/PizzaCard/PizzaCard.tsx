import clsx from 'clsx';
import React from 'react';

import { Button } from '../../../shared/Button/Button';
import { Tabs } from '../../../shared/RadioSlider/RadioSlider';
import { RemouteIng } from '../../../shared/RemouteImg/RemouteImg';
import { Typhography } from '../../../shared/Typhography/Typhography';
import { PizzaDoughs, PizzaSizes } from '../../../utils/helpers/Translater';
import { usePizzaStore } from '../../../utils/stores/PizzaStore/index.ts';
import { CloseIcon } from '../../icons';
import { ToppingCard } from '../ToppingCard/ToppingCard';
import styles from './PizzaCard.module.css';

interface PizzaCardProps {
  pizza: Pizza;
  onClose: () => void;
}

export const PizzaCard = ({ pizza, onClose }: PizzaCardProps) => {
  const [currentPizzaSize, setCurrentPizzaSize] = React.useState(pizza.sizes[0]);
  const [currentPizzaDough, setCurrentPizzaDough] = React.useState(pizza.doughs[0]);
  const [currentToppings, setCurrentToppings] = React.useState([] as PizzaIngredient[]);

  const { addPizza } = usePizzaStore();

  const PizzaToCart = {
    id: pizza.id,
    name: pizza.name,
    img: pizza.img,
    description: pizza.description,
    toppings: currentToppings
      .map((item) => JSON.stringify(item))
      .sort()
      .reverse()
      .map((item) => JSON.parse(item)),
    size: currentPizzaSize,
    doughs: currentPizzaDough
  };

  const changeSize = (data: PizzaSize) => {
    setCurrentPizzaSize(data);
  };

  const changeDough = (data: PizzaDough) => {
    setCurrentPizzaDough(data);
  };

  const checkToppings = (data: PizzaIngredient) => {
    if (currentToppings.includes(data)) {
      setCurrentToppings(currentToppings.filter((item) => item !== data));
    } else {
      setCurrentToppings([...currentToppings, data]);
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['pizza-card-layout']}>
        <div className={styles['pizza-card-header']}>
          <CloseIcon CloseIconVariant="card" onClick={onClose} />
        </div>
        <div className={styles['pizza-card-container']}>
          <RemouteIng src={pizza.img} variant="card" />
          <div className={styles['pizza-card-data']}>
            <div className={styles['pizza-card-info']}>
              <Typhography tag="h3" variant="title-form" children={pizza.name} />
              <Typhography
                tag="p"
                variant="paragraph14-regular"
                children={`${PizzaSizes[currentPizzaSize.name]}, ${PizzaDoughs[currentPizzaDough.name]}`}
              />
              <Typhography tag="p" variant="paragraph16-regular" children={pizza.description} />
              <div className={styles['pizza-tags']}>
                {pizza.isVegetarian && <Typhography tag="p" variant="pizza-tag" children={'Вегетарианская'} />}
                {pizza.isGlutenFree && <Typhography tag="p" variant="pizza-tag" children={'Без глютена'} />}
                {pizza.isNew && <Typhography tag="p" variant="pizza-tag" children={'Новое предложение'} />}
                {pizza.isHit && <Typhography tag="p" variant="pizza-tag" children={'Хит'} />}
              </div>
              <Tabs
                elements={pizza.sizes}
                variant={'slider-change'}
                onClick={(size) => changeSize(size as PizzaSize)}
                activate={currentPizzaSize.name}
              />
              <Tabs
                onClick={(dough) => changeDough(dough as PizzaDough)}
                elements={pizza.doughs}
                variant={'slider-change'}
                activate={currentPizzaDough.name}
              />
            </div>
            <div className={styles['pizza-toppings']}>
              <Typhography tag="h3" variant="title" children="Добавить по вкусу" />
              <div className={styles['toppings-container']}>
                {pizza.toppings.map((topping) => (
                  <ToppingCard
                    className={clsx(currentToppings.includes(topping) && styles['checked-topping'])}
                    key={topping.name}
                    topping={topping}
                    onClick={() => checkToppings(topping)}
                  />
                ))}
              </div>
            </div>
            <div className={styles['pizza-card-footer']}>
              <Button children="Добавить в корзину" variant={'accept'} onClick={() => addPizza(PizzaToCart)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
