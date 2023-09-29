import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./style";
import { useSelector } from "react-redux";
import userLogo from "../../../assets/images/profile.png";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity style={styles.profilePicContainer}>
        <Image
          source={
            userData?.profilePicURL
              ? { uri: userData?.profilePicURL }
              : userLogo
          }
          style={styles.profilePic}
        />
        <MaterialCommunityIcons
          name="circle-edit-outline"
          size={30}
          color="black"
          style={styles.penIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
