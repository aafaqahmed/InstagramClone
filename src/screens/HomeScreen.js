import { SafeAreaView, Text, StatusBar } from "react-native";
import React from "react";
import Feed from "../components/Feed";

const HomeScreen = () => {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <SafeAreaView style={{}}>
      <Feed />
    </SafeAreaView>
  );
};

export default HomeScreen;
