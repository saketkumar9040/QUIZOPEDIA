import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import styles from "./style";
import smilyCartoon from "../../../assets/images/smilyCartoon.png";
import QuestionCard from "../../components/questionCard";

const QuestionScreen = ({ navigation, route }) => {
  const data = route.params;

  const [category, setCategory] = useState(data.code);
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [lastMinute, setLastMinute] = useState(false);
  const [score, setScore] = useState(7);

  const flatlistRef = useRef();

  const fetchData = async () => {
    const data = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    // console.log(data.data.results);
    setQuestions(data.data.results);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        {questions.length > 0 ? (
          <>
            <FlatList
              ref={flatlistRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={questions}
              renderItem={({ item, index }) => {
                const isLastIndex = questions.length - 1 === index;
                return (   
                  <QuestionCard
                    question={item}
                    index={index}
                    navigation={navigation}
                    isLastIndex={isLastIndex}
                    flatlistRef={flatlistRef}
                  />
                );
              }}
            />
          </>
        ) : (
          <View style={styles.pleaseWaitContainer}>
            <Image source={smilyCartoon} style={styles.smilyCartoonImage} />
            <Text style={styles.pleaseWaitText}>
              Please Wait while Quiz is starting...
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default QuestionScreen;
