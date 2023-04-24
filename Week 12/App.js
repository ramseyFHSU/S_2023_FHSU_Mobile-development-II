import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./app/context/AuthContext";
import Navigation from "./app/navigation/Navigation";
import { SafeAreaView, StyleSheet } from "react-native";
import MyTabs from "./app/navigation/BottomNavigation";
import { TaskProvider } from "./app/context/TaskContext";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <AuthContextProvider>
        <TaskProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </TaskProvider>
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffe4b5",
  },
});
