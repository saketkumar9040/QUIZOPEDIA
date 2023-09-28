import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
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

  const fetchData = async () => {
    const data = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    // console.log(data.data.results);
    setQuestions(data.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1,alignItems:'center' }}>
        {questions.length > 0 ? (
          <>
            <CountdownCircleTimer
              isPlaying
              duration={30}
              colors={["#00ff00", "#ffff00","#FFA500","#A30000"]}
              colorsTime={[30, 22, 8, 0]}
              size={80}
              onComplete={()=>navigation.navigate("score",{score:score})}
            >
              {({ remainingTime }) => <Text style={{fontSize:20,fontWeight:"900",color:"#00f7ff"}}>{remainingTime}</Text>}
            </CountdownCircleTimer>

            <FlatList
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
