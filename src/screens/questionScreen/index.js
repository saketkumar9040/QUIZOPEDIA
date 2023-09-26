import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import axios from "axios";
import { Feather } from "@expo/vector-icons";

const QuestionScreen = ({ navigation, route }) => {
  const data = route.params;
//   console.log(data);

  const [category,setCategory] = useState("");
  const [difficulty,setDifficulty] = useState("");
  const [amount,setAmount] = useState(10);
  const [ questions,setQuestions] = useState([])

  const fetchData = async () => {
    const data = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    // console.log(data.data.results);
    setQuestions(data.data.results)
  };

  useEffect(() => {
    if(data!==""){
        setCategory(data.code)
        fetchData();
    }
  }, [data]);

  return (
    <View style={styles.container}>
        <View style={styles.prevNextContainer}>
            <TouchableOpacity style={styles.prevContainer}>
            <Feather name="arrow-left" size={24} color="#fff" />
                <Text style={styles.prevText}>PREV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextContainer}>
                <Text style={styles.nextText}>NEXT</Text>
                <Feather name="arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
      <View style={styles.questionText}>
          {questions.map((item,index)=>{
            return(
                <View key={index}>
                <Text>{item.question}</Text>
                </View>
            );
          })}
      </View>
    </View>
  );
};

export default QuestionScreen;
