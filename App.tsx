import "./src/styles/global.css";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from "@/screens/HomeScreen";
import ConfigScreen from "@/screens/configScreen";
import SearchCityScreen from "@/screens/searchCityScreen";

import {
  useFonts,
  NunitoSans_300Light,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold
} from "@expo-google-fonts/nunito-sans";




SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SearchCity" component={SearchCityScreen} options={{ animation: "ios" }} />
          <Stack.Screen name="Config" component={ConfigScreen} options={{ animation: "ios" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

