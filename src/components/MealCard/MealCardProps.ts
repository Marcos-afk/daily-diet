export type MealCardTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: MealCardTypeStyleProps;
}

export interface MealCardProps {
  name: string;
  hour: string;
  type: MealCardTypeStyleProps;
  onPress: () => void;
}
