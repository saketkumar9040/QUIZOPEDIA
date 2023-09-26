import { View, Text } from 'react-native'
import React from 'react';
import styles from './style';

const QuestionScreen = ({navigation,route}) => {
    const data = route.params;
    console.log(data)
  return (
    <View>
      <Text>QuestionScreen</Text>
    </View>
  )
}

export default QuestionScreen;