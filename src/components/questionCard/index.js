import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const QuestionCard = ({question}) => {
  return (
    <View style={styles.questionContainer}>
      {/* <Text style={styles.questionNumber}>Question no - {index + 1}</Text> */}
      <Text style={styles.questionText}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={(e) => console.log(e.target)}
        >
          <Text style={styles.optionText}>{question.correct_answer}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            {question.incorrect_answers[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            {question.incorrect_answers[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            {question.incorrect_answers[2]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionCard;
