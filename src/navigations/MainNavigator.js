import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import DashboardScreen from "../screens/dashboard";
import ProfileScreen from "../screens/profile";
import leaderBoardIcon from "../../assets/images/leaderboardIcon.png";
import profileIcon from "../../assets/images/profile.png";
import { Image } from 'react-native';

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
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={30} color="#9c6b45" />
          ),
          tabBarColor:"#9c6b45",
        }}
      />
      <Tab.Screen
        name="leaderboard"
        component={ProfileScreen}
        options={{
           headerShown: false,
           tabBarIcon:()=><Image source={leaderBoardIcon} style={{height:45,
          width:45,resizeMode:"contain",marginVertical:10,}}/>
          //  <FontAwesome name="user" size={30} color="#0096FF" /> 
        
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
           headerShown: false,
           tabBarIcon:()=><Image source={profileIcon} style={{height:35,
          width:35,resizeMode:"contain",marginVertical:10,}}/>
          //  <FontAwesome name="user" size={30} color="#0096FF" /> 
        
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
