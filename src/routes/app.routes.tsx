import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateDiet } from '@screens/CreateDiet';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createDiet" component={CreateDiet} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
};
