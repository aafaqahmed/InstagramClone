import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, Foundation, Ionicons } from "@expo/vector-icons";
import HomeStackScreen from "./home.routes";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Foundation name="home" size={size} color={color} />;
          }
          if (route.name === "Discovery") {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === "Post") {
            return <Feather name="plus-square" size={size} color={color} />;
          }
          if (route.name === "Notifications") {
            return <AntDesign name="hearto" size={size} color={color} />;
          }
          if (route.name === "Profile") {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Router;
