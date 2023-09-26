import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 180,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#7B3F00",
    margin: 5,
    backgroundColor: "#fff",
    elevation: 10,
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#7B3F00",
  },
});

export default styles;