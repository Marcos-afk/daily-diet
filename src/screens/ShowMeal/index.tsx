import * as Styled from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { HeaderIcon } from '@components/HeaderIcon';
import { RouteParams } from './ShowDietProps';
import { ButtonIcon } from '@components/ButtonIcon';
import { useState } from 'react';
import { Modal } from '@components/Modal';
import { Alert } from 'react-native';
import { deleteMeal } from '@storage/diets/DeleteMeal';

export const ShowMeal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const { goBack, navigate } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  const handleGoToEditDiet = () => {
    navigate('editMeal', {
      meal,
    });
  };

  const handleRemoveDiet = async () => {
    try {
      await deleteMeal(meal.id);
      toggleModal();
      Alert.alert('Refeição removida com sucesso!');
      navigate('home');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Não foi possível excluir a refeição: ', error.message);
      }
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Styled.Container>
      <HeaderIcon type={meal.type === 'PRIMARY' ? 'SECONDARY' : 'THIRD'} title="Refeição" onPress={handleGoBack} />
      <Styled.TextsContainer>
        <Styled.Title>{meal.name}</Styled.Title>
        <Styled.Description>{meal.description}</Styled.Description>
        <Styled.DateLabel>Data e hora</Styled.DateLabel>
        <Styled.DateValue>
          {meal.date} ás {meal.hour}
        </Styled.DateValue>
        <Styled.Tag>
          <Styled.Icon name="circle" type={meal.type === 'PRIMARY' ? 'PRIMARY' : 'SECONDARY'} />
          <Styled.TagText>{meal.type === 'PRIMARY' ? 'dentro da dieta' : 'fora da dieta'}</Styled.TagText>
        </Styled.Tag>
      </Styled.TextsContainer>
      <Styled.SubmitButtonsContainer>
        <Modal isVisible={isModalVisible} toggleModal={toggleModal} onPress={handleRemoveDiet} />
        <ButtonIcon icon="edit" title="Editar refeição" onPress={handleGoToEditDiet} />
        <ButtonIcon icon="delete" title="Excluir refeição" onPress={toggleModal} type="SECONDARY" />
      </Styled.SubmitButtonsContainer>
    </Styled.Container>
  );
};
