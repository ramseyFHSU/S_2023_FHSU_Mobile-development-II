import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditTask = ({ task, updateTask, setTaskEdit }) => {
  const [updatedTitle, setUpdatedTitle] = useState(task.data.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.data.description
  );

  const handleUpdate = () => {
    updateTask(task.id, {
      title: updatedTitle,
      description: updatedDescription,
    });
    setTaskEdit({ task: {}, edit: false });
  };

  const handleCancel = () => {
    setTaskEdit({ task: {}, edit: false });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={updatedTitle}
        onChangeText={setUpdatedTitle}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={updatedDescription}
        onChangeText={setUpdatedDescription}
      />
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={handleUpdate} />
        <Button title="Cancel" onPress={handleCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

export default EditTask;
