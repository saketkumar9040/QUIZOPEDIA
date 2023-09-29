import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingTop:40,
        backgroundColor:"#fff"
    },
    profilePicContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    profilePic:{
        width:200,
        height:200,
    },
    penIcon:{
        position:"absolute",
        bottom:0,
        backgroundColor:"#fff",
        borderRadius:50,
    }
});

export default styles;