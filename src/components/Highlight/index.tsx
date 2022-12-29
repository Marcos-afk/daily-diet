import { HighlightProps } from './HighlightProps';
import * as Styled from './styles';

export const Highlight = ({ title, subtitle }: HighlightProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.SubTitle>{subtitle}</Styled.SubTitle>
    </Styled.Container>
  );
};
