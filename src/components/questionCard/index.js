import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import styles from "./style";
import homeIcon from "../../../assets/images/homeIcon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFinalAnswers,
  setFinalScore,
  clearScoreData,
} from "../../redux/scoreSlice";

const QuestionCard = ({
  question,
  index,
  navigation,
  isLastIndex,
  flatlistRef,
}) => {
  const dispatch = useDispatch();
  const finalAnswersList = useSelector((state) => state.score.finalAnswers);

  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted,setIsSubmitted]= useState(false);
  const [ key,setKey] = useState(0)

  const correctAnswer = question.correct_answer;

  const options = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort();

  const calculateScoreHandler = async () => {
    let finalScore = 0;
    for (let key in finalAnswersList) {
      if (key === finalAnswersList[key]) {
        finalScore++;
      }
    };
    navigation.navigate("score", { finalScore });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={30}
          colors={["#00ff00", "#ffff00", "#FFA500", "#A30000"]}
          colorsTime={[30, 22, 8, 0]}
          size={80}
          onComplete={() => {
            if(isLastIndex){
              calculateScoreHandler()
            }else{
              setIsSubmitted(true)
            }
             
            }}
          isSmoothColorTransition
        >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "900",
                  color: "#BF40BF",
                }}
              >
                {`${minutes}:${seconds}`}
              </Text>
            );
          }}
        </CountdownCircleTimer>
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.questionHeaderContainer}>
          <TouchableOpacity>
            <MaterialIcons name="bookmarks" size={38} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.questionNumber}>Question no - {index + 1}</Text>
          <TouchableOpacity>
            <FontAwesome name="share-alt-square" size={38} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.questionText}>{question.question}</Text>
        <View style={styles.optionsContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {options.map((ele, ind) => {
              return (
                <TouchableOpacity
                  key={ind}
                  style={
                    ele === selectedOption
                      ? { ...styles.option, backgroundColor: "green" }
                      : styles.option
                  }
                  onPress={() => {
                    setSelectedOption(ele);
                    const answer = {};
                    answer[`${correctAnswer}`] = ele;
                    dispatch(setFinalAnswers(answer));
                  }}
                >
                  <Text
                    style={
                      ele === selectedOption
                        ? { ...styles.optionText, color: "#fff" }
                        : styles.optionText
                    }
                  >
                    {ele}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={styles.clearResponseContainer}
            onPress={() => {
              setSelectedOption("");
            }}
          >
            <Ionicons name="refresh-circle" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.prevNextContainer}>

        {!isLastIndex && (
          <TouchableOpacity
            style={styles.nextContainer}
            onPress={() => {
              flatlistRef.current.scrollToIndex({
                animated: true,
                index: index + 1,
              });
              setKey(1);
            }}
          >
            <Text style={styles.nextText}>NEXT</Text>
            <Feather name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default QuestionCard;
