import { ButtonModal } from '@components/ButtonModal';
import { ContainerForTwoItems } from '@components/ContainerForTwoItems';
import { ModalProps } from './ModalProps';
import * as Styled from './styles';

export const Modal = ({ isVisible, toggleModal, onPress }: ModalProps) => {
  return (
    <Styled.Container isVisible={isVisible}>
      <Styled.modalInnerContent>
        <Styled.ModalTitle>Deseja realmente excluir o registro da refeição?</Styled.ModalTitle>
        <ContainerForTwoItems>
          <ButtonModal title="Cancelar !" type="SECONDARY" onPress={toggleModal} />
          <ButtonModal title="Sim, excluir" type="PRIMARY" onPress={onPress} />
        </ContainerForTwoItems>
      </Styled.modalInnerContent>
    </Styled.Container>
  );
};
