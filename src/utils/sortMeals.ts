import { DietListProps } from '@storage/diets/DietStorageDTO';

const sortMealsByDate = (data: DietListProps[]) => {
  return data.sort((a, b) => {
    const dateA = a.date.split('/');
    const dateB = b.date.split('/');

    const formatterDateA = dateA[1] + '/' + dateA[0] + '/' + dateA[2];
    const formatterDateB = dateB[1] + '/' + dateB[0] + '/' + dateB[2];
    if (Date.parse(formatterDateA) > Date.parse(formatterDateB)) return 1;
    else if (Date.parse(formatterDateA) < Date.parse(formatterDateB)) return -1;
    else return 0;
  });
};

const sortMealsByHour = (data: DietListProps[]) => {
  return data.map((item) => {
    item.data.sort((a, b) => a.hour.localeCompare(b.hour));
    return item;
  });
};

export const SortMeals = (data: DietListProps[]) => {
  const prevDietList = sortMealsByDate(data);
  return sortMealsByHour(prevDietList);
};
