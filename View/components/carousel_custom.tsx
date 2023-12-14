import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import brandingColor from "./branding_color";
const DATA = [
  {
    content: "Content1",
    tamNail: "I'm stuck",
    author: "Author1",
    pharagraph: "pharagraph1",
  },
  {
    content: "Content21",
    tamNail: "I'm stuck",
    author: "Author2",
    pharagraph: "pharagraph2",
  },
  {
    content: "Content3",
    tamNail: "I'm stuck",
    author: "Author3",
    pharagraph: "pharagraph3",
  },
];

export default function CarouselCustom({
  content,
  pharagraph,
  btn,
  onPress,
  height,
  width,
  padding,
}) {
  return (
    <FlatList
      horizontal
      data={DATA}
      renderItem={({ item }) => (
        <View
          style={{
            marginLeft: 135,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            width: width,

            paddingBottom: 8,
          }}
        >
          <View
            style={{
              flex: 2,
              marginBottom: 7,
              height: height,
              width: width,
              borderRadius: 10,
              backgroundColor: brandingColor.pink,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item.tamNail}</Text>
          </View>
          <Text style={styleListContentCourse.txtStyle}>{item.content}</Text>
        </View>
      )}
    />
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
