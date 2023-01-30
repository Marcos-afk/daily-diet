import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Props } from './ShowDietProps';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: space-around;
`;

export const TextsContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  margin-top: -8px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  margin-top: 15px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
`}
`;

export const Description = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
`}
`;

export const DateLabel = styled.Text`
  margin-top: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
`}
`;

export const DateValue = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
`}
`;

export const Tag = styled.View`
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  border-radius: 10px;
  padding: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const TagText = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
`}
`;

export const Icon = styled(FontAwesome).attrs<Props>(({ theme, type }) => ({
  size: 12,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  margin-right: 8px;
`;

export const SubmitButtonsContainer = styled.View`
  width: 93%;
  margin-bottom: 15px;
`;

export const DeleteIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;

export const DeleteButton = styled.Pressable`
  width: 100%;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TitleDeleteButton = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-left: 5px;
`;
