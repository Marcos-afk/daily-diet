import { MealProps } from '@storage/diets/DietStorageDTO';

export function streakInDiet(meals: MealProps[]) {
  let streak = 0;
  let bestStreak = 0;

  meals.forEach((meal) => {
    if (meal.type === 'PRIMARY') {
      streak++;
    } else {
      streak = 0;
    }

    if (streak > bestStreak) {
      bestStreak = streak;
    }
  });
  return bestStreak;
}
