import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Props } from './StatisticsHeaderProps';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled(View)<Props>`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT)};
`;

export const Logo = styled(Ionicons).attrs<Props>(({ theme, type }) => ({
  size: 30,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const Button = styled(TouchableOpacity)``;
