import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';

import tropyLogo from "../../../assets/images/trophyLogo.png"
import homeIcon from "../../../assets/images/homeIcon.png"
import retryButton from "../../../assets/images/retryButton.png"
import styles from './style';

const ScoreScreen = ({navigation,route}) => {
    // console.log(route.params.score);
    const score = route.params.score;
    const [ scoreColor,setScoreColor] = useState("");
    const [ greetText,setGreetText] = useState("");

    useEffect(()=>{
        if(score !== undefined){
           if(score <5){
            setScoreColor("red");
            setGreetText("SEEMS IT WAS A BAD DAY, DON'T WORRY TRY HARDER AGAIN 🙂");
           }else if (score > 4 && score < 8){
            setScoreColor("green");
            setGreetText("WELL DONE,LOOKS LIKE HARD WORK IS PAYING YOU OFF🤗");
           }else{
            setScoreColor("#FFC000");
            setGreetText("EXCELLENT, KEEP UP THE GOOD WORK🙂");
           }
        }
    },[]);

  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.congratsContainer}>
           <Text style={styles.congratsText}>{greetText}</Text>
        </View>
      <View style={styles.imageContainer}>
         <Image source={tropyLogo} style={styles.trophyImage}/>
      </View>
      <View style={styles.scoreContainer}>
           <Text style={styles.scoreText}>YOUR SCORE IS</Text>
           <Text style={{...styles.congratsText,fontSize:55,color:scoreColor}}>{score}</Text>
        </View>
        <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Image source={homeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Image source={retryButton} style={styles.retryBotton} />
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ScoreScreen;