import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:40,
    },
    logoContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        elevation:10,  
        paddingBottom:10,
    },
    logo:{
        width:300,
        height:100,
        resizeMode:"contain",
    },
    topicContainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        padding:5,
    },
});

export default styles;