import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Props } from './StatisticsProps';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const CardsContainer = styled.View`
  width: 100%;
  margin-top: -10px;
  border-radius: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ContainerText = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const TwoCardsContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerSecondaryText = styled(View)<Props>`
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT)};
`;
