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
import { Profissional } from '@screens/Profissional';
import { QDeVida } from '@screens/QDeVida';
import { Pessoal } from '@screens/Pessoal';
import { Relacionamento } from '@screens/Relacionamento';
import { Emocoes } from '@screens/Emocoes';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen
        name="login"
        component={Login}
      />
      <Screen
        name="emocoes"
        component={Emocoes}
      />
      <Screen
        name="profissional"
        component={Profissional}
      />
      <Screen
        name="relacionamento"
        component={Relacionamento}
      />
      <Screen
        name="pessoal"
        component={Pessoal}
      />
      <Screen
        name="qDeVida"
        component={QDeVida}
      />
      <Screen
        name="secoes"
        component={Secoes}
      />
      <Screen
        name="perfil"
        component={Perfil}
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
        name="rodaDaVida"
        component={RodaDaVida}
      />
      <Screen
        name="conquistas"
        component={Conquistas}
      />
      <Screen
        name="personalizar"
        component={Personalizar}
      />



    </Navigator>
  );
}