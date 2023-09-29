import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";

import styles from "./style";
import userLogo from "../../../assets/images/profile.png";
import emailLogo from "../../../assets/images/emailLogo.png";
import phoneLogo from "../../../assets/images/phoneLogo.png";
import rankCupLogo from "../../../assets/images/rankCupLogo.png";

const ProfileScreen = () => {
  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);

  const changeProfilePicHandler = async () => {
    console.log("changing profile pic 😎");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.userInfoContainer}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.userNameText}>{userData.name}</Text>
          <View style={styles.detailsContainer}>
            <Image source={emailLogo} style={styles.emailLogo} />
            <Text style={styles.detailsText}>{userData.email}</Text>

            <View style={styles.detailsContainer}>
              <Image source={phoneLogo} style={styles.phoneLogo} />
              <Text style={{...styles.detailsText,color:"green"}}>{userData.phone}</Text>
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

      <View style={styles.rankingContainer}>
                <View style={styles.rankingInnerContainer}>
                <Image source={rankCupLogo} style={styles.rankCup} />
                <Text style={styles.rankText}>45</Text>
                </View>
                <View style={styles.rankingInnerContainer}>
                <Image source={rankCupLogo} style={styles.rankCup} />
                <Text style={styles.rankText}>45</Text>
                </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
