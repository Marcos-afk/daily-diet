import { LabelProps } from './LabelProps';
import * as Styled from './styles';

export const Label = ({ title }: LabelProps) => {
  return <Styled.Label>{title}</Styled.Label>;
};
