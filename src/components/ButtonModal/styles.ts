import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Props } from './ButtonModalProps';

export const Container = styled(TouchableOpacity)<Props>`
  width: 48%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE)};
  margin-top: 10px;
  border-radius: 6px;
`;

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
`;
