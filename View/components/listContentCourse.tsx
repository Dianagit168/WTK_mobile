import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import brandingColor from './branding_color';
const DATA = [
  {
    content: 'Content1',
    tamNail: 'TAMNAIL1',
    author: 'Author1',
    pharagraph: 'pharagraph1',
  },
  {
    content: 'Content21',
    tamNail: 'TAMNAIL2',
    author: 'Author2',
    pharagraph: 'pharagraph2',
  },
  {
    content: 'Content3',
    tamNail: 'TAMNAIL3',
    author: 'Author3',
    pharagraph: 'pharagraph3',
  },
];

export default function ListContentCourse({
  content,
  pharagraph,
  btn,
  onPress,
  height,
  width,
  padding,
}: any) {
  return (
    <View>
      <View style={styleListContentCourse.listContentCourse}>
        <Text style={styleListContentCourse.txtStyle}>{content}</Text>
        <Text onPress={onPress} style={styleListContentCourse.txtBtnStyle}>
          {btn}
        </Text>
      </View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => (
          <View
            style={{
              marginRight: 10,
              marginTop: 10,

              width: width,

              paddingBottom: 8,
            }}>
            <View
              style={{
                marginBottom: 7,
                height: height,
                width: width,
                borderRadius: 10,
                backgroundColor: brandingColor.blue30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item.tamNail}</Text>
            </View>
            <Text style={styleListContentCourse.txtStyle}>{item.content}</Text>
            <Text style={{padding: padding}}> {pharagraph}</Text>
            <Text>by {item.author}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styleListContentCourse = StyleSheet.create({
  listContentCourse: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
  },
  txtStyle: {
    fontWeight: 'bold',
    color: brandingColor.blueBlack100,
  },
  txtBtnStyle: {
    color: brandingColor.blue60,
  },
});
