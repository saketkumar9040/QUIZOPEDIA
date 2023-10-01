import { View, Text, SafeAreaView,Image } from "react-native";
import React from "react";

import styles from "./style";
import userLogo from "../../../assets/images/profile.png"

const LeaderBoardScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Leaderboard</Text>
      </View>
      <View style={styles.leaderBoardTopperContainer}>
           <Image source={userLogo} style={styles.secondTopperImage}/>
           <Image source={userLogo} style={styles.firstTopperImage}/>
           <Image source={userLogo} style={styles.thirdTopperImage}/>
      </View>
    </SafeAreaView>
  );
};

export default LeaderBoardScreen;
