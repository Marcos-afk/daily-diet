import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Props } from './FormProps';

export const Container = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const Label = styled.Text`
    margin-top: 10px;
    margin-bottom: 10px;
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Input = styled.TextInput`
  border:  1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 10px;
`;

export const ContainerForTwoItems = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InnerContainerForTwoItems = styled.View`
  width: 50%;
`;

export const Button = styled(TouchableOpacity)`
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 6px;
`;

export const Icon = styled(FontAwesome).attrs<Props>(({ theme, type }) => ({
  size: 20,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  margin-right: 10px;
`;
