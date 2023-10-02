import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
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
import { setNewScore } from "../../utils/updateUserScore";
import { updateUserData } from "../../redux/authSlice";

const QuestionCard = ({
  question,
  index,
  navigation,
  isLastIndex,
  flatlistRef,
  isSubmit,
}) => {
  const dispatch = useDispatch();
  const finalAnswersList = useSelector((state) => state.score.finalAnswers);

  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // console.log(isSubmitted)

  const correctAnswer = question.correct_answer;
  // console.log(correctAnswer)

  const options = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort();

  const calculateScoreHandler = async () => {
    setIsPlaying(false);
    let score = 0;
    for (let key in finalAnswersList) {
      if (key === finalAnswersList[key]) {
        score++;
      }
    }
    setIsSubmitted(true);
    dispatch(setFinalScore({ finalScore: score }));
    const newUserData = await setNewScore(score);
    dispatch(updateUserData(newUserData));
    navigation.navigate("score");
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: 0,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        {!isSubmitted && (
          <CountdownCircleTimer
            isPlaying
            duration={300}
            colors={["#00ff00", "#ffff00", "#FFA500", "#A30000"]}
            colorsTime={[300, 220, 80, 0]}
            size={80}
            isSmoothColorTransition
            onComplete={() => {
              calculateScoreHandler();
            }}
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
                  {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
                </Text>
              );
            }}
          </CountdownCircleTimer>
        )}
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
                <View key={ind}>
                  {isSubmitted ? (
                    <View
                      style={
                        ele === selectedOption
                          ? {
                              ...styles.option,
                              backgroundColor:
                                selectedOption === correctAnswer
                                  ? "green"
                                  : "red",
                            }
                          : styles.option
                      }
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
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={
                        ele === selectedOption
                          ? { ...styles.option, backgroundColor: "green" }
                          : { ...styles.option }
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
                  )}
                </View>
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
      {isSubmitted && (
        <View style={styles.correctAnswerContainer}>
          <Text
            style={styles.correctAnswerText}
          >{`The correct answer is ${correctAnswer}`}</Text>
        </View>
      )}
      <View style={styles.prevNextContainer}>
        {index > 0 ? (
          <TouchableOpacity
            style={styles.prevContainer}
            onPress={() => {
              flatlistRef.current.scrollToIndex({
                animated: true,
                index: index - 1,
              });
            }}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
            <Text style={styles.prevText}>PREV</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        {isSubmitted ? (
          <>
            <TouchableOpacity
              style={
                isLastIndex
                  ? { ...styles.nextContainer, backgroundColor: "green" }
                  : styles.nextContainer
              }
              onPress={() => {
                !isLastIndex
                  ? flatlistRef.current.scrollToIndex({
                      animated: true,
                      index: index + 1,
                    })
                  : calculateScoreHandler();
              }}
            >
              <Text style={styles.nextText}>
                {isLastIndex ? "SCORE" : "NEXT"}
              </Text>
              <Feather name="arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
          </>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default QuestionCard;
