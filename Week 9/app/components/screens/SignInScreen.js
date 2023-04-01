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

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSingIn = () => {
    console.warn("Sign In Pressed");
  };

  const OnForgotPassword = () => {
    console.warn("Forgot Password Pressed");
  };

  const OnSingInGoogle = () => {
    console.warn("Sign In with google pressed");
  };

  const OnSingInApple = () => {
    console.warn("Sign In with Apple pressed");
  };

  const OnSingUp =() =>{
    console.warn("Sign Up is pressed");
  }

  return (
    <View style={styles.main}>
      <Image
        source={tiger}
        style={(styles.tiger, { height: height * 0.3 })}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="User Name"
        value={username}
        setValue={setUsername}
      />
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
       <CustomButton
        bgColor="#607d8b"
        text="Sign in with Apple"
        onPress={OnSingInApple}
      />
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
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffe4b5",
    padding: 40,
  },
  tiger: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
});
