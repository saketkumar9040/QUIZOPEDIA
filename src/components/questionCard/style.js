import { Dimensions, StyleSheet } from "react-native";
const { height,width} =Dimensions.get("window")

const styles = StyleSheet.create({
    questionContainer: {
        flex:1,
        alignItems:"center",
        marginTop: 50,
        // padding:40,
        marginHorizontal:20,
        backgroundColor:"#F4D03F",
        borderRadius:40,
        width:width-40,
        marginBottom:40,
      },
      questionHeaderContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        gap:15,
        marginBottom:30,
      },
      questionNumber:{
          fontSize:20,
          color:"#fff",
          fontWeight:"900",
          marginBottom:20,
          borderWidth:5,
          borderColor:"#fff",
          borderTopWidth:0,
          paddingHorizontal:20,
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30,
          textAlign:"center",
          padding:5,
      },
      questionText:{
        fontSize:20,
        // width:200,
        fontWeight:"900",
        color:"#fff",
        textAlign:"center",
        marginHorizontal:20,
      },
      optionsContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
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
        textAlign:"center",
        letterSpacing:2
      },
      prevNextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        marginHorizontal: 5,
      },
      prevContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        backgroundColor: "#F4D03F",
        padding: 5,
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius:40,
    
      },
      prevText: {
        fontSize: 14,
        fontWeight: "800",
        color: "#fff",
      },
      nextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        backgroundColor: "#F4D03F",
        padding: 5,
        paddingHorizontal: 20,
        borderTopRightRadius: 40,
        borderBottomRightRadius:40
      },
      nextText: {
        fontSize: 14,
        fontWeight: "800",
        color: "#fff",
      },
      homeIcon: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        marginVertical: 10,
      },
      clearResponseContainer:{
        // flexDirection:"row",
        alignItems:"center",
        // justifyContent:"center",
        marginBottom:5,
        borderRadius:30
      },
});

export default styles;