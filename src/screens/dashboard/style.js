import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    logoContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    logo:{
        width:300,
        height:300,
        resizeMode:"contain"
    }
});

export default styles;