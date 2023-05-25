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
import { MeCuidar } from '@screens/MeCuidar';
import { ObjetivoFim } from '@screens/ObjetivoFim';
import { Metas } from '@screens/Metas';
import { ObjetivoDefinido } from '@screens/ObjetivoDefinido';
import { RAmoroso } from '@screens/RAmoroso';
import { Familia } from '@screens/Familia';
import { VidaSocial } from '@screens/VidaSocial';
import { Intelectual } from '@screens/Intelectual';
import { ConSocial } from '@screens/ConSocial';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen
        name="secoes"
        component={Secoes}
      />

      <Screen
        name="profissional"
        component={Profissional}
      />
      <Screen
        name="social"
        component={ConSocial}
      />
      <Screen
        name="financeiro"
        component={Profissional}
      />
      <Screen
        name="realizacao"
        component={Profissional}
      />

      <Screen
        name="pessoal"
        component={Pessoal}
      />
      <Screen
        name="intelectual"
        component={Intelectual}
      />
      <Screen
        name="saude"
        component={Relacionamento}
      />
      <Screen
        name="emocional"
        component={Relacionamento}
      />

      <Screen
        name="qDeVida"
        component={QDeVida}
      />

      <Screen
        name="relacionamento"
        component={Relacionamento}
      />
      <Screen
        name="rAmoroso"
        component={RAmoroso}
      />
      <Screen
        name="familia"
        component={Familia}
      />
      <Screen
        name="vidaSocial"
        component={VidaSocial}
      />


      <Screen
        name="objetivoDefinido"
        component={ObjetivoDefinido}
      />
      <Screen
        name="emocoes"
        component={Emocoes}
      />
      <Screen
        name="login"
        component={Login}
      />
      <Screen
        name="metas"
        component={Metas}
      />
      <Screen
        name="objetivoFim"
        component={ObjetivoFim}
      />
      <Screen
        name="meCuidar"
        component={MeCuidar}
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