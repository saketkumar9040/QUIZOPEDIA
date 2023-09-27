import { Dimensions, StyleSheet } from "react-native";
const { height,width} =Dimensions.get("window")

const styles = StyleSheet.create({
    questionContainer: {
        alignItems:"center",
        marginTop: 50,
        padding:40,
        marginHorizontal:20,
        backgroundColor:"#F4D03F",
        borderRadius:40,
        width:width-40,
      },
      questionNumber:{
          fontSize:35,
          color:"#fff",
          fontWeight:"400",
          marginBottom:20,
      },
      questionText:{
        fontSize:20,
        // width:200,
        fontWeight:"900",
        color:"#fff",
        textAlign:"center",
      },
      optionsContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        marginTop:40,
        elevation:10,
      },
      option:{
        backgroundColor:"#fff",
        alignItems:"center",
        margin:10,
        padding:10,
        borderRadius:10,
        width:250,
        elevation:10,
      },
      optionText:{
        fontSize:16,
        fontWeight:"900",
        color:"#f4d03f",
        // textAlign:"center",
        letterSpacing:2
      }
});

export default styles;