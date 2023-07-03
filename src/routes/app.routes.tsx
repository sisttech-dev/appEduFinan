import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
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
import { PersoAvatar } from '@screens/PersoAvatar';
import { PersoPet } from '@screens/PersoPet';
import { PersoCor } from '@screens/PersoCor';
import { Calendario } from '@screens/Calendario';
import { Configuracao } from '@screens/Configuracao';
import { InfoObjetivo } from '@screens/InfoObjetivo';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export function AppRoutes() {

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FF4673',
          borderTopWidth: 1,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: -2 },
          elevation: 2,
        }
      }}>
      <Tab.Screen name="rodaDaVida" component={RodaStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="pie-chart-sharp" color={color} size={size} />
            }
            return <Ionicons name="pie-chart-outline" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen name="homeScreen" component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home-sharp" color={color} size={size} />
            }
            return <Ionicons name="home-outline" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen name="perfil" component={PerfilStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <FontAwesome name="user" color={color} size={size} />
            }
            return <FontAwesome name="user-o" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

function RodaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="rodaDaVida"
        component={RodaDaVida}
      />
      <Stack.Screen
        name="vidaSocial"
        component={VidaSocial}
      />
      <Stack.Screen
        name="objetivoDefinido"
        component={ObjetivoDefinido}

      />
      <Stack.Screen
        name="secoes"
        component={Secoes}
      />
      <Stack.Screen
        name="qDeVida"
        component={QDeVida}
      />
      <Stack.Screen
        name="profissional"
        component={Profissional}
      />
      <Stack.Screen
        name="social"
        component={ConSocial}
      />
      <Stack.Screen
        name="financeiro"
        component={Profissional}
      />
      <Stack.Screen
        name="realizacao"
        component={Profissional}
      />
      <Stack.Screen
        name="pessoal"
        component={Pessoal}
      />
      <Stack.Screen
        name="intelectual"
        component={Intelectual}
      />
      <Stack.Screen
        name="saude"
        component={Relacionamento}
      />
      <Stack.Screen
        name="emocional"
        component={Relacionamento}
      />
      <Stack.Screen
        name="relacionamento"
        component={Relacionamento}
      />
      <Stack.Screen
        name="rAmoroso"
        component={RAmoroso}
      />
      <Stack.Screen
        name="familia"
        component={Familia}
      />
      <Stack.Screen
        name="emocoes"
        component={Emocoes}
      />
      <Stack.Screen
        name="infoObjetivo"
        component={InfoObjetivo}
      />
      <Stack.Screen
        name="metas"
        component={Metas}
      />
      <Stack.Screen
        name="objetivoFim"
        component={ObjetivoFim}
      />
      <Stack.Screen
        name="meCuidar"
        component={MeCuidar}
      />
      <Stack.Screen
        name="login"
        component={Login}
      />
    </Stack.Navigator>
  )
}

export function HomeStack() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="home"
        component={Home}
      />
      <Stack.Screen
        name="mapaMental"
        component={MapaMental}
      />

    </Stack.Navigator>
  );
}

function PerfilStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="perfil"
        component={Perfil}
      />
      <Stack.Screen
        name="wallet"
        component={Wallet}
        options={{ navigationBarHidden: true }}
      />
      <Stack.Screen
        name="conquistas"
        component={Conquistas}
      />
      <Stack.Screen
        name="personalizar"
        component={Personalizar}
      />
      <Stack.Screen
        name="calendario"
        component={Calendario}
      />
      <Stack.Screen
        name="config"
        component={Configuracao}
      />
      <Stack.Screen
        name="persoAvatar"
        component={PersoAvatar}
      />
      <Stack.Screen
        name="persoPet"
        component={PersoPet}
      />
      <Stack.Screen
        name="persoCor"
        component={PersoCor}
      />
    </Stack.Navigator>
  )
}


