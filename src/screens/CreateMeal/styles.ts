import { FontAwesome } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { Props } from './CreateDietProps';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: space-around;
`;

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  margin-top: -8px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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

export const SubmitButton = styled.TouchableOpacity`
  width: 93%;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
`}
`;

export const Icon = styled(FontAwesome).attrs<Props>(({ theme, type }) => ({
  size: 20,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  margin-right: 10px;
`;
