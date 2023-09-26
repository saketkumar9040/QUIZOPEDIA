import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import axios from "axios";
import { Feather } from "@expo/vector-icons";
import homeIcon from "../../../assets/images/homeIcon.png"

const QuestionScreen = ({ navigation, route }) => {
  const data = route.params;

  const [category,setCategory] = useState(data.code);
  const [difficulty,setDifficulty] = useState("");
  const [amount,setAmount] = useState(10);
  const [questions,setQuestions] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    // console.log(data.data.results);
    setQuestions(data.data.results)
  };

  useEffect(() => {
        fetchData();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.prevNextContainer}>
            <TouchableOpacity style={styles.prevContainer}>
            <Feather name="arrow-left" size={24} color="#fff" />
                <Text style={styles.prevText}>PREV</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("home")}>
            <Image source={homeIcon} style={styles.homeIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextContainer}>
                <Text style={styles.nextText}>NEXT</Text>
                <Feather name="arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
      <View >
          {/* {questions.map((item,index)=>{
            return(
                <View key={index} style={styles.questionContainer}>
                <Text>{item.question}</Text>
                </View>
            );
          })} */}
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{questions[0]?.question}</Text>
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{questions[0]?.correct_answer}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{questions[0]?.incorrect_answers[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{questions[0]?.incorrect_answers[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{questions[0]?.incorrect_answers[2]}</Text>
                </TouchableOpacity>

            </View>
          </View>
      </View>
    </View>
  );
};

export default QuestionScreen;
