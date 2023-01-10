import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { THEME } from '@theme/index';
import { useState } from 'react';
import { Platform, View } from 'react-native';
import { DatePickerTypeModeProps, ButtonTypeStyleProps } from './FormProps';
import * as Styled from './styles';

export const Form = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [datepicker] = useState(new Date());
  const [mode, setMode] = useState<DatePickerTypeModeProps>('date');
  const [show, setShow] = useState(false);

  const [selectedButton, setSelectButton] = useState<ButtonTypeStyleProps>('PRIMARY');

  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || datepicker;
    setShow(Platform.OS === 'ios');
    const tempDate = new Date(currentDate);
    const formattedDate = `${tempDate.getDate()}/${tempDate.getMonth() + 1}/${tempDate.getFullYear()}`;
    const formattedTime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    mode === 'time' ? setTime(String(formattedTime)) : setDate(String(formattedDate));
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode === 'time' ? 'time' : 'date');
  };

  return (
    <Styled.Container>
      <Styled.Label>Nome</Styled.Label>
      <Styled.Input
        value={name}
        onChangeText={setName}
        maxLength={80}
        placeholder="Nome a ser registrado"
        placeholderTextColor={THEME.COLORS.GRAY_400}
      />

      <Styled.Label>Descrição</Styled.Label>
      <Styled.Input
        multiline={true}
        numberOfLines={5}
        style={{ textAlignVertical: 'top' }}
        maxLength={129}
        value={description}
        onChangeText={setDescription}
        placeholder="Descrição da alimentação"
        placeholderTextColor={THEME.COLORS.GRAY_400}
      />

      <Styled.ContainerForTwoItems>
        <Styled.InnerContainerForTwoItems>
          <Styled.Label>Data</Styled.Label>
          <Styled.Input
            onPressIn={() => showMode('date')}
            value={date}
            onChangeText={setDate}
            placeholder="Clique aqui"
            placeholderTextColor={THEME.COLORS.GRAY_400}
          />
        </Styled.InnerContainerForTwoItems>

        <View style={{ marginLeft: 5, marginRight: 5 }} />

        <Styled.InnerContainerForTwoItems>
          <Styled.Label>Hora</Styled.Label>
          <Styled.Input
            onPressIn={() => showMode('time')}
            value={time}
            onChangeText={setTime}
            placeholder="Clique aqui"
            placeholderTextColor={THEME.COLORS.GRAY_400}
          />
        </Styled.InnerContainerForTwoItems>

        {show && (
          <DateTimePicker testID="dateTimePicker" value={datepicker} mode={mode} is24Hour={true} onChange={onChange} />
        )}
      </Styled.ContainerForTwoItems>

      <Styled.Label>Está dentro da dieta ?</Styled.Label>
      <Styled.ContainerForTwoItems>
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
          <Styled.Label>Sim</Styled.Label>
        </Styled.Button>

        <View style={{ marginLeft: 5, marginRight: 5 }} />

        <Styled.Button
          onPress={() => setSelectButton('SECONDARY')}
          style={
            selectedButton === 'SECONDARY' && {
              borderWidth: 1,
              borderColor: THEME.COLORS.RED_DARK,
              backgroundColor: THEME.COLORS.RED_LIGHT,
            }
          }
        >
          <Styled.Icon name="circle" type="SECONDARY" />
          <Styled.Label>Não</Styled.Label>
        </Styled.Button>
      </Styled.ContainerForTwoItems>
    </Styled.Container>
  );
};
