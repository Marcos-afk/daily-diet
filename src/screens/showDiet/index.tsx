import * as Styled from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { HeaderIcon } from '@components/HeaderIcon';
import { RouteParams } from './ShowDietProps';
import { ButtonIcon } from '@components/ButtonIcon';
import { useState } from 'react';
import { Modal } from '@components/Modal';

export const ShowDiet = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const { diet } = route.params as RouteParams;

  const { goBack, navigate } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  const handleGoToEditDiet = () => {
    navigate('editDiet', {
      diet,
    });
  };

  const handleRemoveDiet = (diet: string) => {
    console.log(diet);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Styled.Container>
      <HeaderIcon type={diet.type === 'on' ? 'SECONDARY' : 'THIRD'} title="Refeição" onPress={handleGoBack} />
      <Styled.TextsContainer>
        <Styled.Title>{diet.name}</Styled.Title>
        <Styled.Description>{diet.description}</Styled.Description>
        <Styled.DateLabel>Data e hora</Styled.DateLabel>
        <Styled.DateValue>
          {diet.date} ás {diet.hour}
        </Styled.DateValue>
        <Styled.Tag>
          <Styled.Icon name="circle" type={diet.type === 'on' ? 'PRIMARY' : 'SECONDARY'} />
          <Styled.TagText>{diet.type === 'on' ? 'dentro da dieta' : 'fora da dieta'}</Styled.TagText>
        </Styled.Tag>
      </Styled.TextsContainer>
      <Styled.SubmitButtonsContainer>
        <Modal isVisible={isModalVisible} toggleModal={toggleModal} />
        <ButtonIcon icon="edit" title="Editar refeição" onPress={handleGoToEditDiet} />
        <ButtonIcon icon="delete" title="Excluir refeição" onPress={toggleModal} type="SECONDARY" />
      </Styled.SubmitButtonsContainer>
    </Styled.Container>
  );
};
