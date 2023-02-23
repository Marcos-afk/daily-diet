import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealProps } from './DietStorageDTO';
import { findAllMeals } from './FindAllMeals';
import { DIET_COLLECTION } from '@storage/storageConfig';

export async function updateMeal(meal: MealProps) {
  try {
    const dietList = await findAllMeals();
    const findIndexMeal = dietList.findIndex((m) => m.id === meal.id);
    dietList[findIndexMeal] = meal;
    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(dietList));
  } catch (error) {
    throw error;
  }
}
