import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="dashboard" component={DashboardScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;
