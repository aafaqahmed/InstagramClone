import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Post from "./Post/Post";
import Stories from "./Stories";

const post = [
  {
    id: "1",
    user: {
      imageUri:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
      name: "aafaq",
    },
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    caption: "Beautiful city of Taxila!",
    likesCount: 1234,
    postedAt: "7 minutes ago",
  },
  {
    id: "2",
    user: {
      imageUri:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
      name: "arslan",
    },
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
    caption: "Beautiful city of Taxila!",
    likesCount: 1234,
    postedAt: "7 minutes ago",
  },
  {
    id: "3",
    user: {
      imageUri:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg",
      name: "farhan",
    },
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg",
    caption: "Beautiful city of Taxila!",
    likesCount: 1234,
    postedAt: "7 minutes ago",
  },
];

const Feed = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={post}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={Stories}
      />
    </SafeAreaView>
  );
};

export default Feed;
