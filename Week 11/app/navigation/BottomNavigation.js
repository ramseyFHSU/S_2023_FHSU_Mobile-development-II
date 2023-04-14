import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TaskList from "../components/Task/TaskList";
import AddTask from "../components/Task/AddTask";
import ProfilePage from "../components/screens/ProfilePage";
import SignUpScreen from "../components/screens/SignUpScreen";
import SignInScreen from "../components/screens/SignInScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#ffe4b5" },
        tabBarActiveTintColor: "#0693e3",
      }}
    >
      <Tab.Screen
        name="TaskList"
        component={TaskList}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddTask"
        component={AddTask}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="plus" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={"black"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SiginUp"
        component={SignInScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={"black"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
