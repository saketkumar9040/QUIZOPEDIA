import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { auth, db, storage } from "../firebase/firebaseConfig.js";
import Logo from "../../assets/images/loginLogo.png";
import { Entypo, Zocial } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { authenticate } from "../redux/authSlice.js";

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async () => {
    try {
      if (userDetails.email === "" || userDetails.password === "") {
        return Alert.alert("OOPS😯", "Please enter all the fields");
      }
      // VERIFY LOGIN CREDENTIALS IN FIREBASE==============================================>

      const userLogin = await signInWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
      const { uid, stsTokenManager } = userLogin.user;
      const { accessToken, ExpirationTime } = stsTokenManager;
      // console.log(accessToken);

      // FETCH USERDATA FROM REALTIME DATABASE =============================================>

      const dbRef = ref(getDatabase());
      const childRef = child(dbRef, `UserData/${uid}`);
      const snapshot = (await get(childRef)).val();
      // console.log(snapshot);

      // DISPATCH USERDATA TO REDUX STORE ===================================================>

      dispatch(
        authenticate({
          userData: {
            userData: snapshot.email,
            token: snapshot.password,
          },
        })
      );

      Alert.alert(
        "Hurray🤩",
        `Dear ${snapshot.name} you are logged in successfully`
      );
    } catch (error) {
      console.log(error.message);
      Alert.alert("Sorry🙄", "failed to login user");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.image} />
      </View>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Zocial name="email" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter e-mail here"
            value={userDetails.email}
            onChangeText={(e) => setUserDetails({ ...userDetails, email: e })}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Entypo name="lock" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password here"
            secureTextEntry={true}
            value={userDetails.password}
            onChangeText={(e) =>
              setUserDetails({ ...userDetails, password: e })
            }
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => submitHandler()}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.newUserText}>New to QUIZOPEDIA ?</Text>
          <TouchableOpacity
            style={styles.registerButtonContainer}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
