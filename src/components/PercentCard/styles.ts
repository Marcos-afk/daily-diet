import styled from 'styled-components/native';
import { Props } from './PercentCardProps';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

export const Container = styled(View)<Props>`
  width: 100%;
  flex-direction: row;
  margin-top: 33px;
  margin-bottom: 40px;
  background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT)};
  border-radius: 8px;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 30,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const Button = styled(TouchableOpacity)`
  margin-left: -30px;
`;
