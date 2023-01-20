import * as Styled from './styles';
import { HeaderIconProps } from './HeaderIconProps';

export const HeaderIcon = ({ type, title, onPress }: HeaderIconProps) => {
  return (
    <Styled.Container type={type}>
      <Styled.Button onPress={onPress}>
        <Styled.Icon name="arrow-back" />
      </Styled.Button>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
