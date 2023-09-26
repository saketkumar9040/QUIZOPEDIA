import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
        // alignItems:"center"
    },
    logoContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        elevation:10, 
        paddingTop:40,  
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
        marginTop:20,
    }
});

export default styles;