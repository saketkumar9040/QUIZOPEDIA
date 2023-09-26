import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    imageContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 60,
      elevation: 10,
    },
    image: {
      height: 220,
      width: 250,
      resizeMode: "stretch",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      margin: 15,
      paddingHorizontal: 10,
      backgroundColor: "#c87137",
      paddingVertical: 2,
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
      backgroundColor: "#c87137",
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
      color: "#c87137",
      fontWeight: "900",
      letterSpacing: 2,
    },
    registerButtonContainer: {
      paddingHorizontal: 30,
      borderWidth: 4,
      borderColor: "#c87137",
      borderRadius: 10,
    },
    registerText: {
      textAlign: "center",
      color: "#c87137",
      fontSize: 20,
      fontWeight: "900",
      letterSpacing: 2,
    },
  });

  export default styles;