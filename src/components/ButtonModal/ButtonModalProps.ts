import { TouchableOpacityProps } from 'react-native';

export type ButtonModalTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: ButtonModalTypeStyleProps;
}

export interface ButtonModalProps extends TouchableOpacityProps {
  type: ButtonModalTypeStyleProps;
  title: string;
}
