export type HeaderIconTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'THIRD';

export interface Props {
  type: HeaderIconTypeStyleProps;
}

export interface HeaderIconProps {
  type: HeaderIconTypeStyleProps;
  title: string;
  onPress: () => void;
}
