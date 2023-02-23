import { DietListProps } from '@storage/diets/DietStorageDTO';

export const calculatePercentage = (dietList: DietListProps[]) => {
  const dietListForPercentage = dietList.map((diet) => diet.data).flat();
  const totalMealsInDiet = dietListForPercentage.filter((meal) => meal.type === 'PRIMARY').length;
  const percentageOfDiet = totalMealsInDiet / dietListForPercentage.length;

  const percentage = percentageOfDiet * 100;
  const formattedPercentage = percentage.toFixed(2).replace('.', ',');
  return { formattedPercentage: `${formattedPercentage}%`, percentage };
};
