import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { auth ,db,storage} from '../firebase/firebaseConfig.js';
import Logo from "../../assets/images/loginLogo.png"

const LoginScreen = () => {

  return (
   <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
       <Image source={Logo} style={styles.image}/>
      </View>
   </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  imageContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:60,
  },
  image:{
    height:200,
    width:250,
    resizeMode:"stretch"
  }
})