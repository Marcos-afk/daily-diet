import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { Props } from './FeedbackProps';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Image = styled.Image`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  margin-top: 5px;
  text-align: center;
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const TitleButton = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
`}
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 40px;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 5px;
`;
