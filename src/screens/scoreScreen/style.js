import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
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
  imageContainer: {},
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
  homeIcon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    marginVertical: 10,
  },

});

export default styles;
