import { InputPros } from './InputProps';
import * as Styled from './styles';

export const Input = ({ ...rest }: InputPros) => {
  return <Styled.Input {...rest} />;
};
