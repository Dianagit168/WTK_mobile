import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import brandingColor from "./branding_color";

export default function ContentCourse({ content, btn, onPress }) {
  return (
    <View style={styleListContentCourse.listContentCourse}>
      <Text style={styleListContentCourse.txtStyle}>{content}</Text>
      <Text onPress={onPress} style={styleListContentCourse.txtBtnStyle}>
        {btn}
      </Text>
    </View>
  );
}
const styleListContentCourse = StyleSheet.create({
  listContentCourse: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 20,
  },
  txtStyle: {
    fontWeight: "bold",
    color: brandingColor.blueBlack100,
  },
  txtBtnStyle: {
    color: brandingColor.blue60,
  },
});
