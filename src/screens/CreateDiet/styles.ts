import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: space-around;
`;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: -10px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
