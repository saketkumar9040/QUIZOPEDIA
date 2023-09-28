import { View, Text } from 'react-native'
import React from 'react';

import styles from './style';

const ScoreScreen = ({navigation,route}) => {
    console.log(route.params);
  return (
    <View>
      <Text>ScoreScreen</Text>
    </View>
  )
}

export default ScoreScreen;