import { Highlight } from '@components/Highlight';
import { StatisticsHeaderProps } from './StatisticsHeaderProps';
import * as Styled from './styles';

export const StatisticsHeader = ({ type, title, onPress }: StatisticsHeaderProps) => {
  return (
    <Styled.Container type={type}>
      <Styled.Button onPress={onPress}>
        <Styled.Logo name="arrow-back" type={type} />
      </Styled.Button>
      <Highlight title={title} subtitle="das refeições dentro da dieta" />
    </Styled.Container>
  );
};
