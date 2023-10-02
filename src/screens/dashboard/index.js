import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import logo from "../../../assets/images/dashboardLogo.png";
import TopicCard from "../../components/topicCard";
import { subjectList } from "../../../assets/data/subjectList";
import { useSelector } from "react-redux";

const DashboardScreen = ({ navigation }) => {

  // console.log(useSelector(state=>state.auth.userData))
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topicContainer}>
          {subjectList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("question", item);
                }}
              >
                <TopicCard subject={item.subject} image={item.image} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
