import { Form } from '@components/Form';
import { HeaderIcon } from '@components/HeaderIcon';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';

export const CreateDiet = () => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Styled.Container>
      <HeaderIcon type="PRIMARY" title="Nova refeição" onPress={handleGoBack} />
      <Styled.FormContainer>
        <Form />
      </Styled.FormContainer>

      <Styled.SubmitButton>
        <Styled.Text>Cadastrar refeição</Styled.Text>
      </Styled.SubmitButton>
    </Styled.Container>
  );
};
