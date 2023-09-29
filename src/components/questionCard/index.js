import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
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
import { calculateScore, clearScore } from "../../redux/scoreSlice";

const QuestionCard = ({ question, index, navigation, isLastIndex ,flatlistRef }) => {

    const dispatch = useDispatch();
    const score = useSelector(state=>state.score.finalScore);
    const [selectedOption,setSelectedOption] = useState("");

    const correctAnswer = question.correct_answer;
    // console.log(correctAnswer);

  const options = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort();

  const calculateScoreHandler = async () => {
      if(selectedOption == correctAnswer){
        dispatch(calculateScore({score:1}))
      }
      navigation.navigate("score",{score:score});
    //   dispatch(clearScore());
  }

  return (
    <View style={styles.container}>
        <View style={{alignItems:"center"}}>
          <CountdownCircleTimer
              isPlaying
              duration={5* 60}
              colors={["#00ff00", "#ffff00", "#FFA500", "#A30000"]}
              colorsTime={[300, 220, 80, 0]}
              size={80}
              onComplete={() => calculateScoreHandler()}
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
                      color: "#00f7ff",
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
          {options.map((ele, ind) => {
            return (
              <TouchableOpacity
                key={ind}
                style={ele === selectedOption ?{...styles.option,backgroundColor:"green"}:styles.option}
                onPress={() => {
                    setSelectedOption(ele);
                }}
              >
                <Text style={ele === selectedOption?{...styles.optionText,color:"#fff"}:styles.optionText}>{ele}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={styles.clearResponseContainer} onPress={()=>{
            setSelectedOption("");
        }}>
          <Ionicons name="refresh-circle" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.prevNextContainer}>

        {index > 0 && (
          <TouchableOpacity 
             style={styles.prevContainer}
             onPress={()=>{
               flatlistRef.current.scrollToIndex({
                animated:true,
                index:index-1,
               })
             }}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
            <Text style={styles.prevText}>PREV</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Image source={homeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
        
        {!isLastIndex ? (
          <TouchableOpacity 
             style={styles.nextContainer}
             onPress={()=>{
              flatlistRef.current.scrollToIndex({
               animated:true,
               index:index+1,
              })
            }}
          >
            <Text style={styles.nextText}>NEXT</Text>
            <Feather name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ ...styles.nextContainer, backgroundColor: "green" }}
            onPress={()=>calculateScoreHandler()}
          >
            <Text style={styles.nextText}>SUBMIT</Text>
            <Feather name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
};

export default QuestionCard;
