import { THEME } from '@theme/index';
import { ButtonIconProps } from './ButtonIconProps';
import * as Styled from './styles';

export const ButtonIcon = ({ icon, title, type = 'PRIMARY', ...rest }: ButtonIconProps) => {
  return (
    <Styled.Container
      {...rest}
      type={type}
      style={type === 'SECONDARY' && { borderWidth: 1, borderColor: THEME.COLORS.GRAY_100 }}
    >
      <Styled.Icon name={icon} type={type} />
      <Styled.Title type={type}>{title}</Styled.Title>
    </Styled.Container>
  );
};
