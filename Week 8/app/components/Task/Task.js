import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import TaskProperties from "./TaskProperties";

import Swipeable from "react-native-gesture-handler/Swipeable";

export default function Task({
  image,
  title,
  description,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={"#lightgrey"} onPress={onPress}>
        <>
          <View style={styles.mainContainer}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>Task: {title}</Text>
            <Text style={styles.description}>Description: {description}</Text>
          </View>
          <TaskProperties />
        </>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#b8860b",
    flexDirection: "column",
    padding: 25,
    paddingTop: 50,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
  description: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
});
