import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';
import { Home } from '@screens/Home';
import { Perfil } from '@screens/Perfil';
import { Conquistas } from '@screens/Conquistas';
import { Personalizar } from '@screens/Personalizar';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){

  return(
    <Navigator screenOptions={{ headerShown: false }}>


  
      <Screen 
        name="personalizar"
        component={Personalizar}
      />
      <Screen 
        name="perfil"
        component={Perfil}
      />

      <Screen 
        name="conquistas"
        component={Conquistas}
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