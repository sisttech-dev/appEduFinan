
import { Home } from '@screens/Home';
import { Perfil } from '@screens/Perfil';
import { RodaDaVida } from '@screens/RodaDaVida';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export function HomeNavBar() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
export function RodaNavBar() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RodaDaVida" component={RodaDaVida} />
        </Stack.Navigator>
    )
}
export function PerfilNavBar() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>

    )
}