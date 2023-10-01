import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      //   paddingTop:Platform.OS ==="android"?40:0
      backgroundColor: "#fff",
    },
    imageContainer: {
      paddingTop: 30,
      alignItems: "center",
    },
    image: {
      width: 250,
      height: 250,
      resizeMode: "contain",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 15,
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: "#fbbd08",
      paddingVertical:2,
    },
    textInput: {
      flex: 1,
      fontSize: 20,
      marginLeft: 15,
      backgroundColor: "#fff",
      padding: 10,
    },
    buttonContainer: {
      marginTop: 20,
      alignSelf: "center",
      backgroundColor: "#fbbd08",
      paddingHorizontal: 50,
      borderRadius: 10,
      elevation: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 25,
      letterSpacing: 2,
      fontWeight: "800",
    },
    registerContainer: {
      marginTop: 30,
      alignSelf: "center",
      gap: 20,
    },
    newUserText: {
      fontSize: 18,
      color: "#fbbd08",
      fontWeight: "900",
      letterSpacing: 2,
    },
    registerButtonContainer: {
      paddingHorizontal: 30,
      borderWidth: 4,
      borderColor: "#fbbd08",
      borderRadius: 10,
    },
    registerText: {
      textAlign: "center",
      color: "#fbbd08",
      fontSize: 20,
      fontWeight: "900",
      letterSpacing: 2,
    },
  });

  export default styles;
  