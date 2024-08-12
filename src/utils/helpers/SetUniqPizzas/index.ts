export const SetUniqPizzas = (data: PizzaCardChecked[]) => {
  const uniqData = [];
  const uniqList = [...new Set(data.map((item: PizzaCardChecked) => JSON.stringify(item)))].sort();

  for (const elem of uniqList) {
    uniqData.unshift({
      count: data.filter((item: PizzaCardChecked) => JSON.stringify(item) === elem).length,
      value: JSON.parse(elem)
    });
  }
  return uniqData;
};
