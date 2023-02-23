import { StatisticsHeaderTypeStyleProps } from '@components/StatisticsHeader/StatisticsHeaderProps';
import { MealProps } from '@storage/diets/DietStorageDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        type: StatisticsHeaderTypeStyleProps;
        title: string;
        meals: MealProps[];
      };
      createMeal: undefined;
      feedback: {
        style: string;
      };
      showMeal: {
        meal: MealProps;
      };
      editMeal: {
        meal: MealProps;
      };
    }
  }
}
