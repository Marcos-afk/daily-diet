import { Highlight } from '@components/Highlight';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';

export const Statistics = () => {
  const { goBack } = useNavigation();

  const handleHome = () => {
    goBack();
  };

  return (
    <Styled.Container>
      <StatisticsHeader type="PRIMARY" onPress={handleHome} />
      <Styled.CardsContainer>
        <Styled.Title>Estatísticas gerais</Styled.Title>

        <Styled.ContainerText>
          <Highlight title="22" subtitle="melhor sequência de pratos dentro da dieta" />
        </Styled.ContainerText>

        <Styled.ContainerText>
          <Highlight title="109" subtitle="refeições registradas" />
        </Styled.ContainerText>

        <Styled.TwoCardsContainer>
          <Styled.ContainerSecondaryText type="PRIMARY">
            <Highlight title="99" subtitle="refeições dentro da dieta" />
          </Styled.ContainerSecondaryText>

          <Styled.ContainerSecondaryText type="SECONDARY">
            <Highlight title="10" subtitle="refeições fora da dieta" />
          </Styled.ContainerSecondaryText>
        </Styled.TwoCardsContainer>
      </Styled.CardsContainer>
    </Styled.Container>
  );
};
