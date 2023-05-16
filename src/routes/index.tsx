import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import Navigation from '../Navigation';
export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}