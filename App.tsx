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
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_900Black,
  });

  return (
    <ThemeProvider theme={THEME}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
