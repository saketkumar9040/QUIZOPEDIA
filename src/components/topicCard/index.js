import { View, Text,Image } from 'react-native'
import React from 'react';
import styles from './style';
import logo from "../../../assets/images/physicsLogo.png"

const TopicCard = ({image,subject}) => {
  return (
    <View style={styles.container}>
    <Image source={image} style={styles.image}/>
      <Text style={styles.text}>{`${subject}`.toUpperCase()}</Text>
    </View>
  )
}

export default TopicCard