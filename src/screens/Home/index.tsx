import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { MealCard } from '@components/MealCard';
import { PercentCard } from '@components/PercentCard';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import { SectionList } from 'react-native';
import { DietListProps } from './HomeProps';
import { mock } from './mock';
import * as Styled from './styles';

export const Home = () => {
  const [dietList, setDietList] = useState<DietListProps[]>(mock);
  const [title, setTitle] = useState('');
  const [type, setType] = useState(true);

  const getPercentage = () => {
    if (dietList.length === 0) {
      return setTitle('00,00%');
    }

    let amountOn = 0;
    let length = 0;

    dietList.map((diet) => {
      length += diet.data.length;
      diet.data.map((d) => {
        if (d.type === 'on') {
          amountOn += 1;
        }
      });
    });

    const percentage = ((amountOn * 100) / length).toFixed(2);
    if (Number(percentage) < 50) {
      setType(false);
    } else {
      setType(true);
    }

    setTitle(`${percentage}%`);
  };

  useFocusEffect(
    useCallback(() => {
      getPercentage();
    }, []),
  );

  return (
    <Styled.Container>
      <Header />
      <PercentCard title={title} type={type ? 'PRIMARY' : 'SECONDARY'} />
      <Styled.Text>Refeições</Styled.Text>
      <ButtonIcon icon="add" title="Nova refeição" />
      <SectionList
        sections={dietList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <MealCard name={item.name} hour={item.hour} type={item.type === 'on' ? 'PRIMARY' : 'SECONDARY'} />
        )}
        renderSectionHeader={({ section: { title } }) => <Styled.SectionTitle>{title}</Styled.SectionTitle>}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginVertical: 16 }}
      />
    </Styled.Container>
  );
};
