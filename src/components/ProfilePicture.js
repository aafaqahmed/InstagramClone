import { View, Text, Image } from "react-native";
import React from "react";

const ProfilePicture = ({ uri, size }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 100,
          width: size + 6,
          height: size + 6,
          margin: 5,
        }}
      >
        <Image
          style={{ width: size, height: size, borderRadius: 50, margin: 2 }}
          source={{
            uri,
          }}
        />
      </View>
    </View>
  );
};

export default ProfilePicture;
