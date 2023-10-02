import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";

import styles from "./style";
import tropyLogo from "../../../assets/images/trophyLogo.png";
import homeIcon from "../../../assets/images/homeIcon.png";
import reviewIcon from "../../../assets/images/reviewLogo.png";
import { clearScoreData } from "../../redux/scoreSlice";

const ScoreScreen = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const score = route.params.finalScore;
  console.log(score)

  const [scoreColor, setScoreColor] = useState("");
  const [greetText, setGreetText] = useState("");

  useEffect(() => {
    if (score !== undefined || score !== null) {
      if (score < 5) {
        setScoreColor("#FF3131");
        setGreetText(
          "SEEMS LIKE IT WAS A BAD DAY, DON'T WORRY TRY HARDER NEXT TIME 🙂"
        );
      } else if (score > 4 && score < 8) {
        setScoreColor("#FFBF00");
        setGreetText("WELL DONE,LOOKS LIKE HARD WORK IS PAYING YOU OFF🤗");
      } else {
        setScoreColor("#7CFC00");
        setGreetText("EXCELLENT, KEEP UP THE GOOD WORK🙂");
      }
    }
  }, [score]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.congratsContainer}>
        <Text style={styles.congratsText}>{greetText}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={tropyLogo} style={styles.trophyImage} />
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>YOUR SCORE IS</Text>
        {scoreColor && (
          <Text
            style={{ ...styles.congratsText, fontSize: 55, color: scoreColor }}
          >
            {score} / 10
          </Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            dispatch(clearScoreData());
            navigation.navigate("home");
          }}
        >
          <Image source={homeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("question");
          }}
        >
          <Image source={reviewIcon} style={styles.retryBotton} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScoreScreen;
