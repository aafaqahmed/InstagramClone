import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Footer = ({ caption, likesCount: likesCountProp, postedAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLiked(!isLiked);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 100,
          }}
        >
          <TouchableOpacity onPress={onLikePressed}>
            <AntDesign
              name={isLiked ? "heart" : "hearto"}
              size={25}
              color={isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              style={styles.icons}
              name="comment"
              size={23}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather style={styles.icons} name="send" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Feather
              style={styles.icons}
              name="bookmark"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
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

const styles = StyleSheet.create({
  icons: {
    color: "#545454",
  },
});
