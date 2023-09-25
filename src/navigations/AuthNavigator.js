import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import MainNavigator from "./MainNavigator";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth ? (
        <MainNavigator />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="login" component={<LoginScreen />} />
          <Stack.Screen name="login" component={<RegisterScreen />} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AuthNavigator;
