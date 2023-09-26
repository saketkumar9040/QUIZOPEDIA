import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
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
  }
});

export default styles;
