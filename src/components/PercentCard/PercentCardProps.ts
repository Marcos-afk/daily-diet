export type PercentCardTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: PercentCardTypeStyleProps;
}

export interface PercentCardProps {
  type: PercentCardTypeStyleProps;
  title: string;
  onPress: () => void;
}
