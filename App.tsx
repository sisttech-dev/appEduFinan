
import { ThemeProvider, useTheme } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_700Bold  } from '@expo-google-fonts/poppins';
import theme from './src/theme'
import { Groups } from '@screens/Groups'
import { ActivityIndicator , StatusBar} from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular,Poppins_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle = "dark-content"
      backgroundColor={"transparent"}
      translucent/>
    {fontsLoaded? <Groups/>: <ActivityIndicator/>}
    </ThemeProvider>
  );
}

