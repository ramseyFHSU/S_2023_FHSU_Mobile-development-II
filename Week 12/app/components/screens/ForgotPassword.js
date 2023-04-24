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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onConform = () => {
    console.warn("Sending the link");
  };
  const onHandle = () => {
    console.warn("Back to sing in");
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Reset Your Password</Text>

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomButton text="Send" onPress={onConform} />
      <CustomButton
        bgColor={"white"}
        text="Back To Sign In"
        onPress={onHandle}
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
