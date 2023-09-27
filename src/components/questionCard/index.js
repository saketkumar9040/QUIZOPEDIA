import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const QuestionCard = ({question,index}) => {
    const options = [question.correct_answer,...question.incorrect_answers].sort();
  return (
    <View style={styles.questionContainer}>
      {/* <Text style={styles.questionNumber}>Question no - {index + 1}</Text> */}
      <Text style={styles.questionText}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {
             options.map((item,index)=>{
                return (
                    <TouchableOpacity
                    style={styles.option}
                    onPress={() => console.log(item)}
                    key={index}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                );
             })
        }
      </View>
    </View>
  );
};

export default QuestionCard;
