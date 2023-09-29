import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  userInfoContainer: {
    // marginTop:40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  profilePicContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    width: 150,
    height: 150,
  },
  penIcon: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  userNameText: {
    fontSize: 40,
    fontWeight: "700",
    alignSelf: "center",
    marginVertical: 15,
    color: "#800080",
  },
  emailLogo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  phoneLogo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  detailsContainer: {
    marginVertical: 15,
  },
  detailsText: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#F33A6A",
    // textAlign:"center"
  },
  progressBarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  progressHeading: {
    fontSize: 18,
    fontWeight: "800",
    margin: 10,
  },
  rankingContainer: {
    // flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    padding:10,
    paddingHorizontal: 35,
    marginHorizontal: 20,
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  rankingInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rankCup: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  rankHeading: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "800",
    width: 100,
  },
  rankText: {
    fontSize: 18,
    fontWeight: "800",
    marginLeft: 10,
    textAlign: "center",
  },
  bottomContainer: {
    flexDirection:"row",
    marginTop: 20,
    alignItems:'center',
    justifyContent:"space-between",
    // position:"absolute",/
    // bottom:0,
  },
  logoContainer: {
    alignItems: "center",
     justifyContent:"center",
    // marginHorizontal: 2,
  },

  bottomLogo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 11,
    fontWeight: "900",
    width: 90,
    textAlign: "center",
  },
});

export default styles;
