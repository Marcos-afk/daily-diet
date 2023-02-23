import AsyncStorage from '@react-native-async-storage/async-storage';
import { DIET_COLLECTION } from '@storage/storageConfig';
import { MealProps } from './DietStorageDto';

export const findAllMeals = async () => {
  try {
    const storage = await AsyncStorage.getItem(`${DIET_COLLECTION}`);
    const meals: MealProps[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
};
