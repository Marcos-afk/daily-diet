import * as Styled from './styles';
import { ButtonModalProps } from './ButtonModalProps';
import { THEME } from '@theme/index';

export const ButtonModal = ({ type, title, ...rest }: ButtonModalProps) => {
  return (
    <Styled.Container
      {...rest}
      type={type}
      style={type === 'SECONDARY' && { borderWidth: 1, borderColor: THEME.COLORS.GRAY_100 }}
    >
      <Styled.Title type={type}>{title}</Styled.Title>
    </Styled.Container>
  );
};
