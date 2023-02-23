import { MealProps } from '@storage/diets/DietStorageDTO';

export const groupedMeals = (meals: MealProps[]) => {
  const groupedMeals = meals.reduce((acc, meal) => {
    const { date } = meal;
    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(meal);
    return acc;
  }, {} as Record<string, MealProps[]>);

  const dietList = Object.entries(groupedMeals).map((m) => {
    const [date, data] = m;
    return {
      date,
      data,
    };
  });

  return dietList;
};
