import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';
import { Home } from '@screens/Home';
import { Perfil } from '@screens/Perfil';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){

  return(
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen 
        name="perfil"
        component={Perfil}
      />
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="login"
        component={Login}
      />

      

    </Navigator>
  );
}