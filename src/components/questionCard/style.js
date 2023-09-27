import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    questionContainer: {
        alignItems:"center",
        marginTop: 50,
        padding:10,
        padding:40,
        marginHorizontal:20,
        backgroundColor:"#F4D03F",
        borderRadius:40,
      },
      questionText:{
        fontSize:25,
        fontWeight:"700",
        color:"#fff"
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
        width:250
      },
      optionText:{
        fontSize:20,
        fontWeight:"700",
        color:"#f4d03f",
        // textAlign:"center",
        letterSpacing:2
      }
});

export default styles;