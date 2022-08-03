import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import logo from "../assets/images/logo.png";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons name="paper-plane-outline" size={25} color={"#000"} />
          ),
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 135, alignSelf: "center" }}
            />
          ),

          headerRight: () => (
            <Feather name="camera" size={25} color={"#545454"} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
