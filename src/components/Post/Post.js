import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Post = ({ post }) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        caption={post.caption}
        likesCount={post.likesCount}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
