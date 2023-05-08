import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';
import { Home } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){

  return(
    <Navigator screenOptions={{ headerShown: false }}>

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