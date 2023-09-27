import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const QuestionCard = ({ questions }) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        style={styles.questionList}
        data={questions}
        renderItem={(item) => {
          return (
            <>
              <View style={styles.questionContainer}>
                <Text style={styles.questionText}>
                  {questions[0]?.question}
                </Text>
                <View style={styles.optionsContainer}>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={(e) => console.log(e.target)}
                  >
                    <Text style={styles.optionText}>
                      {questions[0]?.correct_answer}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>
                      {questions[0]?.incorrect_answers[0]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>
                      {questions[0]?.incorrect_answers[1]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>
                      {questions[0]?.incorrect_answers[2]}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default QuestionCard;
