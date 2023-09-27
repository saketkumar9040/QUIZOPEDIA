import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor:"#fff"
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
 
});

export default styles;
