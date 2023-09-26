import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Image } from 'react-native';

import DashboardScreen from "../screens/dashboard";
import ProfileScreen from "../screens/profile";
import leaderBoardIcon from "../../assets/images/leaderboardIcon.png";
import profileIcon from "../../assets/images/profile.png";
import homeIcon from "../../assets/images/homeIcon.png"
import LeaderBoardScreen from '../screens/leaderboard';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      activeColor="#9c6b45"
      // inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#fff",padding:2, }}
      screenOptions={{
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarIcon:()=>(<Image source={homeIcon} style={{height:40,
            width:40,resizeMode:"contain",marginVertical:10,}}/>),
          tabBarColor:"#9c6b45",
        }}
      />
      <Tab.Screen
        name="leaderboard"
        component={LeaderBoardScreen}
        options={{
           headerShown: false,
           tabBarIcon:()=><Image source={leaderBoardIcon} style={{height:50,
          width:50,resizeMode:"contain",marginVertical:10,}}/>
          //  <FontAwesome name="user" size={30} color="#0096FF" /> 
        
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
           headerShown: false,
           tabBarIcon:()=><Image source={profileIcon} style={{height:40,
          width:40,resizeMode:"contain",marginVertical:10,}}/>
          //  <FontAwesome name="user" size={30} color="#0096FF" /> 
        
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
