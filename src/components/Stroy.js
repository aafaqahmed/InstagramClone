import { View, Text } from "react-native";
import React from "react";
import ProfilePicture from "./ProfilePicture";

const Stroy = ({ imageUri, name }) => {
  return (
    <View>
      <ProfilePicture uri={imageUri} size={70} />
      <Text style={{ alignSelf: "center" }}>{name}</Text>
    </View>
  );
};

export default Stroy;
