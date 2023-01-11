import { Form } from '@components/Form';
import { HeaderIcon } from '@components/HeaderIcon';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Styled from './styles';

export const CreateDiet = () => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Styled.Container>
          <HeaderIcon type="PRIMARY" title="Nova refeição" onPress={handleGoBack} />
          <Styled.FormContainer>
            <Form />
          </Styled.FormContainer>

          <Styled.SubmitButton>
            <Styled.Text>Cadastrar refeição</Styled.Text>
          </Styled.SubmitButton>
        </Styled.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
