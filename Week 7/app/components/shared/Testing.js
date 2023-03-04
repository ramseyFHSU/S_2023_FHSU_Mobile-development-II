import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Testing() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.text}>Testing React Native</Text>
        </View>
      </View>
      <View style={styles.container4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "blue",
    width: 200,
    height: 200,
    padding: 20,
    paddingHorizontal: 10,
    paddingLeft: 30,
  },
  container3: { backgroundColor: "yellow", width: 100, height: 100 },
  container4: { backgroundColor: "red", width: 100, height: 100, margin: 20 },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "purple",
    textTransform: "capitalize",
    textAlign: "justify",
    lineHeight: 30,
  },
});
