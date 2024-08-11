export const SetUniqPizzas = (data: PizzaCardChecked[]) => {
  const uniqData: UniqPizzas[] = [];
  const uniqList = [...new Set(data.map((item: PizzaCardChecked) => JSON.stringify(item)))].sort().reverse();

  for (const elem of uniqList) {
    uniqData.push({
      count: data.filter((item: PizzaCardChecked) => JSON.stringify(item) === elem).length,
      value: JSON.parse(elem)
    });
  }
  return uniqData;
};
