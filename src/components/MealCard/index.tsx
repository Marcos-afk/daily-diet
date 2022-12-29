import * as Styled from './styles';
import { MealCardProps } from './MealCardProps';

export const MealCard = ({ name, hour, type }: MealCardProps) => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Hour>{hour}</Styled.Hour>
        <Styled.Divider />
        <Styled.Title numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Styled.Title>
      </Styled.TextContainer>
      <Styled.Type type={type} name="circle" />
    </Styled.Container>
  );
};
