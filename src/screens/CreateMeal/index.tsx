import 'react-native-get-random-values';
import * as Styled from './styles';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { HeaderIcon } from '@components/HeaderIcon';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform, View, Alert } from 'react-native';
import { ButtonTypeStyleProps, DatePickerTypeModeProps } from './CreateDietProps';
import { Label } from '@components/Label';
import { Input } from '@components/Input';
import { THEME } from '@theme/index';
import { ContainerForTwoItems } from '@components/ContainerForTwoItems';
import { InnerContainerForTwoItems } from '@components/InnerContainerForTwoItems';
import { createMeal } from '@storage/diets/CreateMeal';
import { v4 } from 'uuid';
import { dateAndTimeFormatter } from '@utils/dateAndTimeFormatter';
import { validateDate } from '@utils/validateDate';

export const CreateMeal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const [datepicker] = useState(new Date());
  const [mode, setMode] = useState<DatePickerTypeModeProps>('date');
  const [show, setShow] = useState(false);

  const [selectedButton, setSelectButton] = useState<ButtonTypeStyleProps>('PRIMARY');

  const { goBack, navigate } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  const handleNewDiet = async () => {
    if (name.trim().length === 0 || date.trim().length === 0 || hour.trim().length === 0) {
      return Alert.alert('Campos requiridos não foram informados!');
    }

    if (!validateDate(date)) {
      return Alert.alert('Data com o formato inválido!');
    }

    try {
      await createMeal({ id: v4(), name, description, date, hour, type: selectedButton });
      handleFeedback();
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Não foi possível adicionar refeição a dieta: ', error.message);
      }
    }
  };

  const handleFeedback = () => {
    navigate('feedback', {
      style: selectedButton,
    });
  };

  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || datepicker;
    setShow(Platform.OS === 'ios');
    const tempDate = new Date(currentDate);
    mode === 'time' ? setHour(dateAndTimeFormatter(tempDate, 'TIME')) : setDate(dateAndTimeFormatter(tempDate, 'DATE'));
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode === 'time' ? 'time' : 'date');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Styled.Container>
        <HeaderIcon type="PRIMARY" title="Nova refeição" onPress={handleGoBack} />
        <Styled.FormContainer>
          <Label title="Campos requeridos *" />
          <Label title="Nome*" />
          <Input
            value={name}
            onChangeText={setName}
            maxLength={80}
            placeholder="Nome a ser registrado"
            placeholderTextColor={THEME.COLORS.GRAY_400}
          />

          <Label title="Descrição" />
          <Input
            multiline={true}
            numberOfLines={5}
            style={{ textAlignVertical: 'top' }}
            maxLength={129}
            value={description}
            onChangeText={setDescription}
            placeholder="Descrição da alimentação"
            placeholderTextColor={THEME.COLORS.GRAY_400}
          />

          <ContainerForTwoItems>
            <InnerContainerForTwoItems>
              <Label title="Data*" />
              <Input
                onPressIn={() => showMode('date')}
                value={date}
                onChangeText={setDate}
                placeholder="Clique aqui"
                placeholderTextColor={THEME.COLORS.GRAY_400}
              />
            </InnerContainerForTwoItems>

            <View style={{ marginLeft: 5, marginRight: 5 }} />

            <InnerContainerForTwoItems>
              <Label title="Hora*" />
              <Input
                onPressIn={() => showMode('time')}
                value={hour}
                onChangeText={setHour}
                placeholder="Clique aqui"
                placeholderTextColor={THEME.COLORS.GRAY_400}
              />
            </InnerContainerForTwoItems>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={datepicker}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </ContainerForTwoItems>

          <Label title="Está dentro da dieta ?" />
          <ContainerForTwoItems>
            <Styled.Button
              onPress={() => setSelectButton('PRIMARY')}
              style={
                selectedButton === 'PRIMARY' && {
                  borderWidth: 1,
                  borderColor: THEME.COLORS.GREEN_DARK,
                  backgroundColor: THEME.COLORS.GREEN_LIGHT,
                }
              }
            >
              <Styled.Icon name="circle" type="PRIMARY" />
              <Label title="Sim" />
            </Styled.Button>

            <Styled.Button
              onPress={() => setSelectButton('SECONDARY')}
              style={[
                { marginLeft: 10 },
                selectedButton === 'SECONDARY' && {
                  borderWidth: 1,
                  borderColor: THEME.COLORS.RED_DARK,
                  backgroundColor: THEME.COLORS.RED_LIGHT,
                },
              ]}
            >
              <Styled.Icon name="circle" type="SECONDARY" />
              <Label title="Não" />
            </Styled.Button>
          </ContainerForTwoItems>
        </Styled.FormContainer>

        <Styled.SubmitButton onPress={handleNewDiet}>
          <Styled.Text>Cadastrar refeição</Styled.Text>
        </Styled.SubmitButton>
      </Styled.Container>
    </TouchableWithoutFeedback>
  );
};
