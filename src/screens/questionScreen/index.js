import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import axios from "axios";

const QuestionScreen = ({ navigation, route }) => {
  const data = route.params;
  console.log(data);

  const [category,setCategory] = useState(data.code);
  const [difficulty,setDifficulty] = useState("");
  const [amouunt,setAmount] = useState(10);

  const fetchData = async () => {
    const data = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${data.code}&difficulty=${difficulty}&type=multiple`
    );
    console.log(data.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>QuestionScreen</Text>
    </View>
  );
};

export default QuestionScreen;
