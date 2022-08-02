import { View, Text, Image } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const Body = ({ imageUri }) => {
  const width = Dimensions.get("window").width;

  return (
    <View>
      <Image source={{ uri: imageUri }} style={{ width, height: width }} />
    </View>
  );
};

export default Body;
