export type StatisticsHeaderTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: StatisticsHeaderTypeStyleProps;
}

export interface StatisticsHeaderProps {
  type: StatisticsHeaderTypeStyleProps;
  onPress: () => void;
  title: string;
}
