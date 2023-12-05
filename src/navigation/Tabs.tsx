import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../../constants/Colors";
import { BottomTabNavigatorParamList, HomeScreenNavigationProp } from "./types";
import NotificationScreen from "../screens/NotificationScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeStackNavigator from "./HomeStack";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            size = 27;
          } else if (route.name === "Menu") {
            iconName = focused ? "ios-list" : "ios-list-outline";
            size = 27;
          } else if (route.name === "Notification") {
            iconName = focused
              ? "ios-notifications"
              : "ios-notifications-outline";
            size = 27;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.onPrimary,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderColor: Colors.text,
          backgroundColor: Colors.text,
          // height: 50,
          margin: 10,
          borderRadius: 20,
          position: "absolute",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 7,
        },
        // tabBarVisible:
        //   route.name !== "Welcome" &&
        //   route.name !== "Login" &&
        //   route.name !== "Register",
      })}
    >
      <Tab.Screen
        name="Menu"
        component={SettingsScreen}
        options={{
          headerShown: false,
          headerTintColor: Colors.primary,
          headerStyle: { backgroundColor: Colors.background },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTintColor: Colors.background,
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerTintColor: Colors.onPrimary,
          headerStyle: { backgroundColor: Colors.background },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
