import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';
import { Home } from '@screens/Home';
import { Perfil } from '@screens/Perfil';
import { Conquistas } from '@screens/Conquistas';
import { Personalizar } from '@screens/Personalizar';
import { rodaDaVida } from '@screens/RodaDaVida';
import { Secoes } from '@screens/Secoes';
import { mapaMental } from '@screens/MapaMental';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>


      <Screen
        name="mapaMental"
        component={mapaMental}
      />
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="login"
        component={Login}
      />
      <Screen
        name="secoes"
        component={Secoes}
      />
      <Screen
        name="rodaDaVida"
        component={rodaDaVida}
      />
      <Screen
        name="conquistas"
        component={Conquistas}
      />
      <Screen
        name="perfil"
        component={Perfil}
      />
      <Screen
        name="personalizar"
        component={Personalizar}
      />



    </Navigator>
  );
}