import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    // alignItems: "center",
    backgroundColor:"#fff",
  },
  congratsContainer: {
    marginTop: 20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:30,
  },
  congratsText:{
    fontSize:22,
    fontWeight:"900",
    color:'#8E44AD',
    textAlign:"center"
  },
  imageContainer: {
    alignItems:"center",
  },
  trophyImage: {
    height: 400,
    width: 300,
    resizeMode: "contain",
  },
  scoreContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  scoreText:{
    fontSize:25,
    fontWeight:"900",
    color:'#8E44AD'
  },
  bottomContainer:{
     flexDirection:"row",
     alignItems:"center",
     justifyContent:'space-between',
     paddingHorizontal:20,
  },
  homeIcon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    marginVertical: 10,
  },
  retryBotton:{
   height: 80,
    width: 100,
    resizeMode: "contain",
    marginVertical: 10,
  }

});

export default styles;
