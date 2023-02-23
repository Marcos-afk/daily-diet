import { StatisticsHeaderTypeStyleProps } from '@components/StatisticsHeader/StatisticsHeaderProps';
import { MealProps } from '@storage/diets/DietStorageDTO';

export type StatisticsContainerSecondaryTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: StatisticsContainerSecondaryTypeStyleProps;
}

export interface RouteParams {
  type: StatisticsHeaderTypeStyleProps;
  title: string;
  meals: MealProps[];
}
