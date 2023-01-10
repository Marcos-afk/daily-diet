import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
`;

export const FormContainer = styled.View`
  margin-top: -10px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 93%;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 5px;
`;

export const Text = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
`}
`;
