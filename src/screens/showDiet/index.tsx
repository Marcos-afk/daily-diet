import * as Styled from './styles';
import { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { HeaderIcon } from '@components/HeaderIcon';
import { RouteParams } from './ShowDietProps';
import { ButtonIcon } from '@components/ButtonIcon';

export const ShowDiet = () => {
  const route = useRoute();
  const { diet } = route.params as RouteParams;

  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  useEffect(() => {
    console.log(diet);
  }, []);

  return (
    <Styled.Container>
      <HeaderIcon type="SECONDARY" title="Refeição" onPress={handleGoBack} />
      <Styled.TextsContainer>
        <Styled.Title>{diet.name}</Styled.Title>
        <Styled.Description>{diet.description}</Styled.Description>
        <Styled.DateLabel>Data e hora</Styled.DateLabel>
        <Styled.DateValue>
          {diet.data} ás {diet.hour}
        </Styled.DateValue>
        <Styled.Tag>
          <Styled.Icon name="circle" type={diet.type === 'on' ? 'PRIMARY' : 'SECONDARY'} />
          <Styled.TagText>{diet.type === 'on' ? 'dentro da dieta' : 'fora da dieta'}</Styled.TagText>
        </Styled.Tag>
      </Styled.TextsContainer>
      <Styled.SubmitButtonsContainer>
        <ButtonIcon icon="edit" title="Editar refeição" onPress={() => {}} />
        <ButtonIcon icon="delete" title="Excluir refeição" onPress={() => {}} type="SECONDARY" />
      </Styled.SubmitButtonsContainer>
    </Styled.Container>
  );
};
