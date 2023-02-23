import { TypeMealStyleProps } from '@storage/diets/DietStorageDTO';

export interface RouteParams {
  meal: {
    id: string;
    hour: string;
    date: string;
    name: string;
    description: string;
    type: TypeMealStyleProps;
  };
}

export type BackgroundViewTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: BackgroundViewTypeStyleProps;
}
