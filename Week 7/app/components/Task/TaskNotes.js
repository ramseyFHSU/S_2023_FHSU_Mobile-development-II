import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

export default function TaskNotes() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/tiger.jpg")}
        />
        <Text style={styles.name}>Name: </Text>
        <Text style={styles.notes}>Notes: </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFC107",
    paddingTop: 50,
    padding: 25,
  },
  name: { fontWeight: "bold", fontSize: 25, padding: 5 },
  notes: { fontSize: 25, padding: 5 },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
});
