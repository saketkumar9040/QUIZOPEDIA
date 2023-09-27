import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import axios from "axios";
import { Feather } from "@expo/vector-icons";
import homeIcon from "../../../assets/images/homeIcon.png";
import QuestionCard from "../../components/questionCard";

const QuestionScreen = ({ navigation, route }) => {
  const data = route.params;

  const [category, setCategory] = useState(data.code);
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(10);
  const [questions, setQuestions] = useState([]);

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
      <View style={{flex:1,}}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={questions}
          renderItem={({item,index}) => {
            return <QuestionCard question={item} index={index} navigation={navigation}/>;
          }}
        />
      </View>
    </View>
  );
};

export default QuestionScreen;
