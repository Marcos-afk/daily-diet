import AsyncStorage from '@react-native-async-storage/async-storage';
import { DIET_COLLECTION } from '@storage/storageConfig';
import { MealProps } from './DietStorageDTO';
import { findAllMeals } from './FindAllMeals';

export const createMeal = async (meal: MealProps) => {
  try {
    const dietList = await findAllMeals();
    const updatedData = [...dietList, meal];
    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(updatedData));
  } catch (error) {
    throw error;
  }
};
