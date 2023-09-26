import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Image } from 'react-native';

import DashboardScreen from "../screens/dashboard";
import ProfileScreen from "../screens/profile";
import LeaderBoardScreen from '../screens/leaderboard';
import QuestionScreen from '../screens/questionScreen';
import leaderBoardIcon from "../../assets/images/leaderboardIcon.png";
import profileIcon from "../../assets/images/profile.png";
import homeIcon from "../../assets/images/homeIcon.png"


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
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

const MainNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="home" component={TabNavigator} options={{headerShown:false}}/>
    <Stack.Screen name="question" component={QuestionScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
  );
};

export default MainNavigator;
