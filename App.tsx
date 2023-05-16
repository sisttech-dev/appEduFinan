
import { ThemeProvider, useTheme } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import THEME from './src/theme'

import { ActivityIndicator, StatusBar, } from 'react-native';
import { Loading } from '@components/Loading';
//    {fontsLoaded ? <Routes /> : <Loading /> }
import { Routes } from './src/routes';

import Navigation from './src/Navigation';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  return (
    
      
      <ThemeProvider theme={THEME}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={"transparent"}
          translucent />

        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </ThemeProvider>
    
  );
}

