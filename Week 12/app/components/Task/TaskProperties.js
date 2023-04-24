import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function TaskProperties() {
  return (
    <View style={styles.container}>
      <Text style={styles.properties}> Additional Description</Text>
      <Text style={styles.properties}>Date</Text>
      <Text style={styles.properties}>Status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff8dc",
    padding: 20,
    borderRadius: 15,
  },
  properties: {
    flex: 1,
    fontWeight: "bold",
    backgroundColor: `#e6e6fa`,
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
  },
});
