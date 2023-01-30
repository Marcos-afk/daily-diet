import Modal from 'react-native-modal';
import styled, { css } from 'styled-components/native';

export const Container = styled(Modal)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const modalInnerContent = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 15px;
  align-items: center;
  justify-content: space-around;
`;

export const ModalTitle = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align: center;
  margin-top: 5px;
`;

export const ModalContainerButtons = styled.View`
  flex-direction: row;
`;
