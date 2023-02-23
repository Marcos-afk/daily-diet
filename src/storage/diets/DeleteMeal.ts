import AsyncStorage from '@react-native-async-storage/async-storage';
import { DIET_COLLECTION } from '@storage/storageConfig';
import { findAllMeals } from './FindAllMeals';

export const deleteMeal = async (id: string) => {
  try {
    const dietList = await findAllMeals();
    const newDietList = dietList.filter((diet) => diet.id !== id);
    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(newDietList));
  } catch (error) {
    throw error;
  }
};
