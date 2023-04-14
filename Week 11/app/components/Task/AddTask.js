import { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";

import { categories } from "./TaskData";
import TaskContext from "../../context/TaskContext";

export default function AddTask() {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //useSate for DropDown
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(null);

  const categoryItems = categories.map((item) => ({
    value: item.value,
    label: item.label,
  }));

  //DateTimePicker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  //   To add task with category, date, title & description
  const handelSubmit = () => {
    if (title && category) {
      const task = {
        title,
        description,
        category,
        date: selectedDate.toString(),
      };
      addTask(task);
      console.log(task);
      setTitle("");
      setDescription("");
      setCategory(null);
      setSelectedDate(null);
    } else {
      alert("Please enter all fields.");
    }
  };

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.viewContainer}>
          <Text style={styles.title}>Create Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Task"
            onChangeText={(title) => setTitle(title)}
            value={title}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Description"
            onChangeText={(description) => setDescription(description)}
            value={description}
          />
          <DropDownPicker
            open={open}
            value={category}
            items={categoryItems}
            setOpen={setOpen}
            setValue={setCategory}
            placeholder="Task Category"
            placeholderStyle={styles.dropdownText}
            containerStyle={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />

          <View style={styles.date}>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          {/* {selectedDate !== null && (
            <Text style={styles.dateText}>
              Selected Date: {selectedDate.toString()}{" "}
            </Text>
          )} */}
          <TouchableOpacity style={styles.button} onPress={handelSubmit}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffe4b5",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: "#ffe4b5",
  },
  title: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderColor: "#ffe4b5",
    borderBottomColor: "black",
  },
  dropdownText: {
    color: "black",
    fontWeight: "bold",
  },
  dropdown: { height: 100, borderRadius: 30, paddingTop: 30 },
  dropdownContainer: {
    backgroundColor: "#dfdfdf",
    borderRadius: 30,
  },
  date: {
    paddingTop: 30,
  },
  dateText: {
    fontSize: 10,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 250,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
