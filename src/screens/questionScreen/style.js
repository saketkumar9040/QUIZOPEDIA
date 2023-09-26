import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     container:{
        flex:1,
        paddingTop:80,
     },
     prevNextContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:5,
        marginHorizontal:5,
     },
     prevContainer:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        gap:5,
        backgroundColor:"#F4D03F",
        padding:5,
        paddingHorizontal:20,
        borderRadius:40,
     },
     prevText:{
        fontSize:20,
        fontWeight:"800",
        color:"#fff"
     },
     nextContainer:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        gap:5,
        backgroundColor:"#F4D03F",
        padding:5,
        paddingHorizontal:20,
        borderRadius:40,
     },
     nextText:{
        fontSize:20,
        fontWeight:"800",
        color:"#fff"
     },
});

export default styles;