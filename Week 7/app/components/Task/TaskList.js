import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import TaskData from "./TaskData";
import Task from "./Task";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TaskList() {
  const [taskList, setTaskList] = useState(TaskData);
  const [refreshing, setRefreshing] = useState(false);

  const deleteTask = (id) => {
    // setTaskList(taskList.filter((task) => task.id !== id));
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={taskList}
        keyExtractor={(taskList) => taskList.id}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log("Task Selected", item)}
            renderRightActions={() => (
              <View style={styles.deleteContainer}>
                <TouchableWithoutFeedback onPress={() => deleteTask(item.id)}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color="black"
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          />
        )}
        // refreshing={refreshing}
        // onRefresh={() => {
        //   setTaskList([taskList[1]]);
        // }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 100,
  },
  secondContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  description: {
    color: "#fff",
    fontWeight: "bold",
  },
  deleteContainer: {
    backgroundColor: "red",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
