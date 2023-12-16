import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import brandingColor from './branding_color';
import SemiBoldText from './semi_bold_text';
import BoldText from './bold_text';
interface ListContentCourseProps {
  tamnail: string;
  pharagraph: string;
  objContent: string;

  author: string;
  height: number;
  width: number;
}

export default function ListContentCourse({
  tamnail,
  pharagraph,
  objContent,
  author,
  height,
  width,
}: ListContentCourseProps) {
  return (
    <View>
      <View style={styleListContentCourse.listContentCourse}>
        <Text style={styleListContentCourse.txtStyle}>{objContent}</Text>
        <Text style={styleListContentCourse.txtBtnStyle}>See all</Text>
      </View>
      <FlatList
        horizontal
        data={[...Array(5)]}
        renderItem={({}) => (
          <View style={{width: width}}>
            <View style={styleListContentCourse.imageContainer}>
              <Image
                source={{
                  uri: tamnail,
                }}
                style={styleListContentCourse.image}
                {...{height: height}}
              />
            </View>
            <View style={{marginRight: 15}}>
              <BoldText
                contentT={pharagraph}
                colorT={brandingColor.blueBlack100}
                fontSizeT={12}
                backColorI={''}
                paddingVer={0}
                paddingHor={0}
              />
              <SemiBoldText
                contentT={author}
                colorT={brandingColor.blueBlack60}
                fontSizeT={10}
              />
            </View>
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
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: brandingColor.pink,
    marginRight: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
});
