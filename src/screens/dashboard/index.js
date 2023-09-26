import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import logo from "../../../assets/images/dashboardLogo.png";
import TopicCard from "../../components/topicCard";
import axios from "axios";

const DashboardScreen = () => {

  const fetchData = async () => {
    const data = await axios.get("https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple");
    console.log(data.data.results);

  };
  useEffect(()=>{
    fetchData();
  },[])
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.topicContainer}>
          <TopicCard/>
          <TopicCard/>
          <TopicCard/>
          <TopicCard/>
          <TopicCard/>
          <TopicCard/>
          <TopicCard/>
          <TopicCard/>
          <TopicCard/>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
