export type TypeMealStyleProps = 'PRIMARY' | 'SECONDARY';

export interface MealProps {
  id: string;
  hour: string;
  date: string;
  name: string;
  description: string;
  type: TypeMealStyleProps;
}

export interface DietListProps {
  date: string;
  data: MealProps[];
}
