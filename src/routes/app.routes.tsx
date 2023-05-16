import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';
import { Home } from '@screens/Home';
import { Perfil } from '@screens/Perfil';
import { Conquistas } from '@screens/Conquistas';
import { Personalizar } from '@screens/Personalizar';
import { RodaDaVida } from '@screens/RodaDaVida';
import { Secoes } from '@screens/Secoes';
import { MapaMental } from '@screens/MapaMental';
import { Wallet } from '@screens/Wallet';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>


      <Screen
        name="login"
        component={Login}
      />
      <Screen
        name="wallet"
        component={Wallet}
      />
      <Screen
        name="mapaMental"
        component={MapaMental}
      />
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="secoes"
        component={Secoes}
      />
      <Screen
        name="rodaDaVida"
        component={RodaDaVida}
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