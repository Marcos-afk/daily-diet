import styled, { css } from 'styled-components/native';

export const Label = styled.Text`
    margin-top: 10px;
    margin-bottom: 10px;
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
