import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import logo from "../../assets/images/registerLogo.png";
import { FontAwesome, Zocial, Entypo } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { child, getDatabase, ref, set } from "firebase/database";
import { app, auth, db } from "../firebase/firebaseConfig";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { authenticate } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const submitHandler = async () => {
    try {
      if (
        userDetails.name === "" ||
        userDetails.email === "" ||
        userDetails.phone === "" ||
        userDetails.password === ""
      ) {
        return Alert.alert("OOPS😯", "Please enter all the fields");
      }

      // CREATING USER AUTHENTICATION CREDENTIALS IN FIREBASE =====================================>
      const registerUser = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
      const { uid, stsTokenManager } = registerUser.user;
      const { accessToken } = stsTokenManager;
      // console.log(uid);

      // SAVING USER DATA TO REALTIME DATABASE =====================================================>

      const userData = {
        name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
        password: userDetails.password,
        uid: uid,
        signUpDate: new Date().toISOString(),
      };

      const dbRef = ref(getDatabase(app));
      const childRef = child(dbRef, `UserData/${uid}`);
      await set(childRef, userData);

      // STORING USER DETAILS IN ASYNC STORAGE =====================================================>

      // await AsyncStorage.setItem("userData",JSON.stringify({
      //   email:userDetails.email,
      //   password:userDetails.password
      // }));

      // DISPATCH DATA TO THE STORE FOR AUTHORIZATION OF USER  ====================================>

      dispatch(
        authenticate({
          userData,
          token:accessToken,
        })
      );

      Alert.alert("Hurray🤩", "user register successfully");
    } catch (error) {
      console.log(error.message);
      Alert.alert("Sorry😪", "failed to register user");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={34} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter name here"
            value={userDetails.name}
            onChangeText={(e) => setUserDetails({ ...userDetails, name: e })}
            autoCapitalize="none"
          />
        </View>
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
          <FontAwesome name="phone" size={32} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter phone no here"
            value={userDetails.phone}
            keyboardType="numeric"
            onChangeText={(e) => setUserDetails({ ...userDetails, phone: e })}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Entypo name="lock" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password here"
            value={userDetails.password}
            secureTextEntry={true}
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
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.newUserText}>Already a user ?</Text>
          <TouchableOpacity
            style={styles.registerButtonContainer}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.registerText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
