import { Highlight } from '@components/Highlight';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import { streakInDiet } from '@utils/streakInDiet';
import { useEffect, useState } from 'react';
import { RouteParams } from './StatisticsProps';
import * as Styled from './styles';

export const Statistics = () => {
  const [totalMealsInDiet, setTotalMealsInDiet] = useState(0);
  const [totalMealsOutDiet, setTotalMealsOutDiet] = useState(0);
  const [bestStreakInDiet, setBestStreakInDiet] = useState(0);

  const { goBack } = useNavigation();

  const route = useRoute();
  const { type, title, meals } = route.params as RouteParams;

  const handleHome = () => {
    goBack();
  };

  useEffect(() => {
    const auxTotalMealsInDiet = meals.filter((diet) => diet.type === 'PRIMARY').length;
    setTotalMealsInDiet(auxTotalMealsInDiet);
    setTotalMealsOutDiet(meals.length - auxTotalMealsInDiet);
    setBestStreakInDiet(streakInDiet(meals));
  }, [meals]);

  return (
    <Styled.Container>
      <StatisticsHeader type={type} title={title} onPress={handleHome} />
      <Styled.CardsContainer>
        <Styled.Title>Estatísticas gerais</Styled.Title>

        <Styled.ContainerText>
          <Highlight title={`${bestStreakInDiet}`} subtitle="melhor sequência de pratos dentro da dieta" />
        </Styled.ContainerText>

        <Styled.ContainerText>
          <Highlight title={`${meals.length}`} subtitle="refeições registradas" />
        </Styled.ContainerText>

        <Styled.TwoCardsContainer>
          <Styled.ContainerSecondaryText type="PRIMARY">
            <Highlight title={`${totalMealsInDiet}`} subtitle="refeições dentro da dieta" />
          </Styled.ContainerSecondaryText>

          <Styled.ContainerSecondaryText type="SECONDARY">
            <Highlight title={`${totalMealsOutDiet}`} subtitle="refeições fora da dieta" />
          </Styled.ContainerSecondaryText>
        </Styled.TwoCardsContainer>
      </Styled.CardsContainer>
    </Styled.Container>
  );
};
