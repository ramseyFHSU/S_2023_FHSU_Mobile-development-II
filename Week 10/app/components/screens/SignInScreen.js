import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import tiger from "../../../assets/tiger.png";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import { UserAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const { signIn, logOut } = UserAuth();

  const navigation = useNavigation();

  const onSingIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      console.log("user signedIn");
      navigation.navigate("AddTask");
    } catch (err) {
      console.log(err);
    }
  };

  const OnForgotPassword = () => {
    console.warn("Forgot Password Pressed");
  };

  const OnSingInGoogle = () => {
    console.warn("Sign In with google pressed");
  };

  const OnLogOut = async () => {
    try {
      await logOut();
      alert("You are logged out");
      navigation.navigate("SignIn");
    } catch (err) {
      console.log(err);
    }
  };

  const OnSingUp = () => {
    console.warn("Sign Up is pressed");
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.main}>
      <Image
        source={tiger}
        style={(styles.tiger, { height: height * 0.3 })}
        resizeMode="contain"
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign In" onPress={onSingIn} />
      <CustomButton
        bgColor="#8ed1fc"
        text="Forgot Password"
        onPress={OnForgotPassword}
      />

      <CustomButton
        bgColor="#ff9800"
        text="Sign in with Google"
        onPress={OnSingInGoogle}
      />
      <CustomButton bgColor="#607d8b" text="Log Out" onPress={OnLogOut} />
      <CustomButton
        bgColor="white"
        text="Don't Have an Account? Create One!"
        onPress={OnSingUp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "#ffe4b5",
    padding: 40,
  },
  tiger: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
});
