import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/HomeScreen";
import ConfigScreen from "@/screens/configScreen";
import SearchCityScreen from "@/screens/searchCityScreen";

const Stack = createNativeStackNavigator();

export default function Layout() {

    return (
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
    )
}