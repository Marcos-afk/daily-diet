import styled from 'styled-components/native';

export const Input = styled.TextInput`
  border:  1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 10px;
`;
