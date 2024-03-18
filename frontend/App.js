import Main from "./src/main";
import Routes from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={Main}
      />
      <Stack.Screen name="Routes" component={Routes} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


