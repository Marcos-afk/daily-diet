import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateMeal } from '@screens/CreateMeal';
import { EditMeal } from '@screens/EditMeal';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { ShowMeal } from '@screens/ShowMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createMeal" component={CreateMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="showMeal" component={ShowMeal} />
      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
};
