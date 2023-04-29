import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExploreScreen from "./src/screens/ExploreScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ProductDetails from "./src/screens/ProductDetails";
import CartScreen from "./src/screens/CartScreen";
import { UserAuth } from "./src/context/AuthContext";
import { CartProvider } from "./src/context/CartContext";

// define your screens or components

// define your stacks
const Stack = createStackNavigator();
// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const ExploreStack = createStackNavigator();
// function ExploreStackScreen() {
//   return (
//     <ExploreStack.Navigator>
//       <ExploreStack.Screen name="ExploreStack" component={ExploreScreen} />
//     </ExploreStack.Navigator>
//   );
// }

// const NotificationsStack = createStackNavigator();
// function NotificationsStackScreen() {
//   return (
//     <NotificationsStack.Navigator>
//       <NotificationsStack.Screen
//         name="Notifications"
//         component={NotificationScreen}
//       />
//     </NotificationsStack.Navigator>
//   );
// }

// const MessagesStack = createStackNavigator();
// function MessagesStackScreen() {
//   return (
//     <MessagesStack.Navigator>
//       <MessagesStack.Screen name="Messages" component={MessagesScreen} />
//     </MessagesStack.Navigator>
//   );
// }

// define your bottom tab navigator

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="cart" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="bell" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesTab"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="message"
              color={"black"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
);

// define your drawer navigator
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <CartProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
        <Drawer.Screen name="ProfileDrawer" component={ProfileScreen} />
      </Drawer.Navigator>
    </CartProvider>
  );
}

// wrap your navigators in the NavigationContainer
export default function Nav() {
  const { user } = UserAuth();
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
