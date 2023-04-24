import { useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

import Task from "./Task";
import TaskContext from "../../context/TaskContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TaskList() {
  const { taskList, editTask, updateTask, deleteTask } =
    useContext(TaskContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskId, setTaskId] = useState(null);

  const handleEditTask = (task) => {
    setTaskId(task.id);
    setTitle(task.data.title);
    setDescription(task.data.description);
    setModalVisible(true);
    editTask(task);
  };

  const handleUpdateTask = () => {
    if (taskId) {
      updateTask(taskId, { title, description });
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={taskList}
        keyExtractor={(taskList) => taskList.id}
        renderItem={({ item }) => (
          <Task
            title={item.data.title}
            description={item.data.description}
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
            renderLeftActions={() => (
              <View style={styles.editContainer}>
                <TouchableWithoutFeedback onPress={() => handleEditTask(item)}>
                  <MaterialCommunityIcons
                    name="pencil"
                    size={35}
                    color="black"
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          />
        )}
      />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateTask}>
            <Text style={styles.buttonText}>Update Task</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  editContainer: {
    backgroundColor: "blue",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
