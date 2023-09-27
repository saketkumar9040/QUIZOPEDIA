import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
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
      <View style={styles.prevNextContainer}>
        <TouchableOpacity style={styles.prevContainer}>
          <Feather name="arrow-left" size={24} color="#fff" />
          <Text style={styles.prevText}>PREV</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Image source={homeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextContainer}>
          <Text style={styles.nextText}>NEXT</Text>
          <Feather name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={questions}
          renderItem={({ item, index }) => {
            return <QuestionCard question={item}/>;
          }}
        />
      </View>
    </View>
  );
};

export default QuestionScreen;
