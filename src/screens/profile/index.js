import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import ProgressBar from "react-native-progress/Bar";

import styles from "./style";
import userLogo from "../../../assets/images/profile.png";
import emailLogo from "../../../assets/images/emailLogo.png";
import phoneLogo from "../../../assets/images/phoneLogo.png";
import rankCupLogo from "../../../assets/images/rankCupLogo.png";
import coinLogo from "../../../assets/images/coinLogo.png";
import penLogo from "../../../assets/images/penLogo.png";
import bookmarkLogo from "../../../assets/images/bookmarkLogo.png";
import testLogo from "../../../assets/images/testLogo.png";
import settingsLogo from "../../../assets/images/settingsIcon.png";

const ProfileScreen = ({ navigation }) => {
  const userData = useSelector((state) => state.auth.userData);

  const changeProfilePicHandler = async () => {
    Alert.alert("work in progress 🚧")
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.userNameText}>Hi, {userData.name}</Text>
      <View style={styles.userInfoContainer}>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <View style={styles.detailsContainer}>
            <Image source={emailLogo} style={styles.emailLogo} />
            <Text style={styles.detailsText}>{userData.email}</Text>

            <View style={styles.detailsContainer}>
              <Image source={phoneLogo} style={styles.phoneLogo} />
              <Text style={{ ...styles.detailsText, color: "green" }}>
                {userData.phone}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.profilePicContainer}
          onPress={() => changeProfilePicHandler()}
        >
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
      </View>
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressHeading}>PROGRESS BAR</Text>
        <ProgressBar progress={0.5} width={350} height={20} borderWidth={5} />
      </View>

      <View style={styles.rankingContainer}>
        <Text style={styles.rankHeading}>RANKING</Text>
        <View style={styles.rankingInnerContainer}>
          <Image source={rankCupLogo} style={styles.rankCup} />
          <Text style={styles.rankText}>45</Text>
        </View>
      </View>
      <View style={styles.rankingContainer}>
        <Text style={styles.rankHeading}>COINS </Text>
        <View style={styles.rankingInnerContainer}>
          <Image source={coinLogo} style={styles.rankCup} />
          <Text style={styles.rankText}>1231</Text>
        </View>
      </View>
      <View style={styles.rankingContainer}>
        <Text style={styles.rankHeading}>QUESTIONS SOLVED</Text>
        <View style={styles.rankingInnerContainer}>
          <Image source={penLogo} style={styles.rankCup} />
          <Text style={styles.rankText}>74</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={() => navigation.navigate("bookmark")}
        >
          <Image source={bookmarkLogo} style={styles.bottomLogo} />
          <Text style={styles.logoText}>BOOKMARKS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={testLogo} style={styles.bottomLogo} />
          <Text style={styles.logoText}>TEST ATTEMPTED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={settingsLogo} style={styles.bottomLogo} />
          <Text style={styles.logoText}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
