import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { MealCard } from '@components/MealCard';
import { PercentCard } from '@components/PercentCard';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SectionList } from 'react-native';
import { DietListProps } from './HomeProps';
import { mock } from './mock';
import * as Styled from './styles';

export const Home = () => {
  const [dietList, setDietList] = useState<DietListProps[]>(mock);
  const [title, setTitle] = useState('50,50%');
  const [type, setType] = useState(true);
  const { navigate } = useNavigation();

  const handleStatistics = () => {
    navigate('statistics');
  };

  const handleCreateDiet = () => {
    navigate('createDiet');
  };

  return (
    <Styled.Container>
      <Header />
      <PercentCard title={title} type={type ? 'PRIMARY' : 'SECONDARY'} onPress={handleStatistics} />
      <Styled.Text>Refeições</Styled.Text>
      <ButtonIcon icon="add" title="Nova refeição" onPress={handleCreateDiet} />
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
