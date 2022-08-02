import { View, Text } from "react-native";
import React from "react";
import Stroy from "./Stroy";
import { FlatList } from "react-native";

const data = [
  {
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Aafaq",
  },
  {
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
    name: "Arslan",
  },
  {
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg",
    name: "Farhan",
  },
  {
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Kamran",
  },
  {
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Noman",
  },
];

const Stories = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({ name }) => name}
        horizontal
        scroll
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
        renderItem={({ item }) => (
          <Stroy imageUri={item.imageUri} name={item.name} />
        )}
      />
    </View>
  );
};

export default Stories;
