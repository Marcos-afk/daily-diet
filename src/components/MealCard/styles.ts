import styled, { css } from 'styled-components/native';
import { Props } from './MealCardProps';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border:  1.5px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-top: 10px;
  ;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  height: 14px;
  width: 2px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Hour = styled.Text`
  padding: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXSM}px;
  `}
`;

export const Title = styled.Text`
  padding: 10px;
  width: 70%;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Type = styled(FontAwesome).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
}))`
  padding: 10px;
`;
