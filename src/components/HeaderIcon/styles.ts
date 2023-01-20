import styled, { css } from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { Props } from './HeaderIconProps';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled(View)<Props>`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme, type }) =>
    (type === 'PRIMARY' && theme.COLORS.GRAY_500) ||
    (type === 'SECONDARY' && theme.COLORS.GREEN_LIGHT) ||
    (type === 'THIRD' && theme.COLORS.RED_LIGHT)};
`;

export const Icon = styled(Ionicons).attrs({
  size: 25,
})``;

export const Title = styled.Text`
  margin: 0 auto;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Button = styled(TouchableOpacity)``;
