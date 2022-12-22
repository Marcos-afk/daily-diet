import { StatusBar } from 'react-native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_900Black,
} from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components';
import { THEME } from '@theme/index';
import { Loading } from '@components/Loading';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_900Black,
  });

  return (
    <ThemeProvider theme={THEME}>
      {fontsLoaded ? <Text> Bem vindo a aplicação </Text> : <Loading />}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
