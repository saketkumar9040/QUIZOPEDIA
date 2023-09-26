import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./style";
import logo from "../../../assets/images/dashboardLogo.png";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
