import { PercentCardProps } from './PercentCardProps';
import * as Styled from './styles';

import { Highlight } from '@components/Highlight';

export const PercentCard = ({ type, title }: PercentCardProps) => {
  return (
    <Styled.Container type={type}>
      <Highlight title={title} subtitle="das refeições dentro da dieta" />
      <Styled.Button>
        <Styled.Icon name="arrow-up-right" type={type} />
      </Styled.Button>
    </Styled.Container>
  );
};
