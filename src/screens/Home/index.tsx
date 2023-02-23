import { ButtonIcon } from '@components/ButtonIcon';
import { Empty } from '@components/Empty';
import { Header } from '@components/Header';
import { MealCard } from '@components/MealCard';
import { PercentCard } from '@components/PercentCard';
import { PercentCardTypeStyleProps } from '@components/PercentCard/PercentCardProps';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DietListProps, MealProps } from '@storage/diets/DietStorageDTO';
import { findAllMeals } from '@storage/diets/FindAllMeals';
import { calculatePercentage } from '@utils/calculatePercentage';
import { groupedMeals } from '@utils/groupedMeals';
import { SortMeals } from '@utils/sortMeals';
import { useState, useCallback, useEffect } from 'react';
import { Alert, SectionList } from 'react-native';
import * as Styled from './styles';

export const Home = () => {
  const [dietList, setDietList] = useState<DietListProps[]>([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState<PercentCardTypeStyleProps>('PRIMARY');
  const { navigate } = useNavigation();

  const getDiet = async () => {
    try {
      const storage = await findAllMeals();
      const dietList = groupedMeals(storage);
      setDietList(SortMeals(dietList));
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Não foi possível buscar lista de dieta', error.message);
      }
    }
  };

  const handleStatistics = () => {
    const meals = dietList.map((diet) => diet.data).flat();
    navigate('statistics', { type, title, meals });
  };

  const handleCreateMeal = () => {
    navigate('createMeal');
  };

  const handleShowMeal = (meal: MealProps) => {
    navigate('showMeal', { meal });
  };

  useFocusEffect(
    useCallback(() => {
      getDiet();
    }, []),
  );

  useEffect(() => {
    if (dietList.length === 0) {
      return setTitle('00,00%');
    }

    const { formattedPercentage, percentage } = calculatePercentage(dietList);
    if (percentage < 50) {
      setType('SECONDARY');
    } else {
      setType('PRIMARY');
    }

    setTitle(formattedPercentage);
  }, [dietList]);

  return (
    <Styled.Container>
      <Header />
      <PercentCard title={title} type={type} onPress={handleStatistics} />
      <Styled.Text>Refeições</Styled.Text>
      <ButtonIcon icon="add" title="Nova refeição" onPress={handleCreateMeal} />
      <SectionList
        sections={dietList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            name={item.name}
            hour={item.hour}
            type={item.type === 'PRIMARY' ? 'PRIMARY' : 'SECONDARY'}
            onPress={() => handleShowMeal(item)}
          />
        )}
        renderSectionHeader={({ section: { date } }) => <Styled.SectionTitle>{date}</Styled.SectionTitle>}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginVertical: 16 }}
        contentContainerStyle={dietList.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <Empty />}
      />
    </Styled.Container>
  );
};
