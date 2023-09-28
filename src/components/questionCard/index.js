import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import homeIcon from "../../../assets/images/homeIcon.png";

const QuestionCard = ({ question, index, navigation, isLastIndex }) => {
  const options = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort();


  return (
    <View style={styles.container}>
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
                style={styles.option}
                onPress={() => {
                    console.log()
                    console.log(ind,ele)
                }}
                key={ind}
              >
                <Text style={styles.optionText}>{ele}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.prevNextContainer}>
        {index > 0 && (
          <TouchableOpacity style={styles.prevContainer}>
            <Feather name="arrow-left" size={24} color="#fff" />
            <Text style={styles.prevText}>PREV</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Image source={homeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
        {
             !isLastIndex ? (
          <TouchableOpacity style={styles.nextContainer}>
            <Text style={styles.nextText}>NEXT</Text>
            <Feather name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ ...styles.nextContainer, backgroundColor: "green" }}
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
