import { useState, useEffect, createContext } from "react";
import { Alert } from "react-native";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [taskEdit, setTaskEdit] = useState({
    task: {},
    edit: false,
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskListRef = collection(db, "taskList");
        const q = query(taskListRef, orderBy("title"), limit(10));
        const querySnapShot = await getDocs(q);
        const taskList = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setTaskList(taskList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTask();
  }, []);

  //   Add Task
  const addTask = (newTask) => {
    try {
      const docRef = addDoc(collection(db, "taskList"), newTask);
      console.log("Document written: ", docRef.id);
      setTaskList((preTaskList) => [
        ...preTaskList,
        { id: docRef.id, data: newTask },
      ]);
    } catch (err) {
      console.log(err);
    }
  };
  //Edit Task
  const editTask = (task) => {
    console.log(task);
    setTaskEdit({ task, edit: true });
  };

  // Update Task
  const updateTask = async (id, updTask) => {
    try {
      const docRef = doc(db, "taskList", id);
      await updateDoc(docRef, updTask);
      const updatedTaskList = taskList.map((task) => {
        if (task.id === id) {
          return {
            id,
            data: {
              ...task.data,
              ...updTask,
            },
          };
        } else {
          return task;
        }
      });
      setTaskList(updatedTaskList);
    } catch (err) {
      console.log(err);
    }
  };

  //   deleteTask
  const deleteTask = (id) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            try {
              const docRef = doc(db, "taskList", id);
              deleteDoc(docRef);
              setTaskList((preTaskList) =>
                preTaskList.filter((task) => task.id !== id)
              );
            } catch (err) {
              console.log(err);
            }
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TaskContext.Provider
      value={{ taskList, addTask, editTask, updateTask, deleteTask, taskEdit }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
