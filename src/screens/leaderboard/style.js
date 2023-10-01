import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     mainContainer:{
        flex:1,
        paddingTop:40,
        backgroundColor:"#fff",
     },
     headerContainer:{
        paddingTop:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
     },
     headerText:{
        fontSize:25,
        fontWeight:"900",
        color:"#f4d03f",
        letterSpacing:2,
     },
     leaderBoardTopperContainer:{
        paddingTop:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:10
     },
     firstTopperImage:{
        height:150,
        width:150,
        resizeMode:"contain",
        borderWidth:5,
        borderColor:"#f4d03f",
        borderRadius:100,
     },
     secondTopperImage:{
        height:100,
        width:100,
        resizeMode:"contain",
        borderWidth:5,
        borderColor:"#00FFFF",
        borderRadius:100,
     },
     thirdTopperImage:{
        height:100,
        width:100,
        resizeMode:"contain",
        borderWidth:5,
        borderColor:"#00A36C",
        borderRadius:100,
     },
});

export default styles