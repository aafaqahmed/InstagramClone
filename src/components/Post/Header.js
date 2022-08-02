import { View, Text } from "react-native";
import React from "react";
import ProfilePicture from "../ProfilePicture";
import { Feather } from "@expo/vector-icons";

const Header = ({ imageUri, name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text
          style={{
            padding: 5,
            color: "#3c3c3c",
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
      </View>
      <Feather
        style={{ marginRight: 8 }}
        name="more-vertical"
        size={20}
        color="black"
      />
    </View>
  );
};

export default Header;
