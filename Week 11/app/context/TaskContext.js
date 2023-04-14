import { useState, useEffect, createContext } from "react";
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
    setTaskEdit({ task, edit: ture });
  };

  // Update Task
  const updateTask = (id, updTask) => {
    const docRef = doc(db, taskList, id);
    console.log(id, updTask);
    updateDoc(docRef, updTask);
    setTaskList((preTaskList) => [
      ...preTaskList,
      { id: docRef.id, data: updTask },
    ]);
  };

  //   deletTask
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const docRef = doc(db, "taskList", id);
        deleteDoc(docRef);
        setTaskList(taskList);
      } catch (err) {
        console.log(err);
      }
    }
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
