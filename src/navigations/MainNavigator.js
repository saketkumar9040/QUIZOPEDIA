import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/dashboard";

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={DashboardScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

export default MainNavigator;

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

