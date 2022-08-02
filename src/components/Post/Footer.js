import { View, Text } from "react-native";
import React from "react";

const Footer = ({ caption, likesCount, postedAt }) => {
  return (
    <View>
      <View style={{ margin: 3 }}>
        <Text style={{ fontWeight: "bold" }}>
          {likesCount} {likesCount > 1 ? "likes" : "like"}
        </Text>
        <Text>{caption}</Text>
        <Text style={{ color: "#8c8c8c" }}>{postedAt}</Text>
      </View>
    </View>
  );
};

export default Footer;
