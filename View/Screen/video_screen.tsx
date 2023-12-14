import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderBar from '../components/header_bar';
import brandingColor from '../components/branding_color';

import Search from '../components/search';
import ListContentCourse from '../components/listContentCourse';

import CarouselCustom from '../components/carousel_custom';

export default function VideoScreen() {
  return (
    <SafeAreaView style={{paddingTop: 15, paddingBottom: 30}}>
      <View>
        <HeaderBar />
      </View>
      <ScrollView style={{marginHorizontal: 20}}>
        <Search
          object={'Explore'}
          leadingIcon={'search'}
          placeHolder={'Find your course'}
        />

        <CarouselCustom
          height={170}
          width={250}
          content={undefined}
          pharagraph={undefined}
          btn={undefined}
          onPress={undefined}
          padding={undefined}
        />

        <ListContentCourse
          content={'Math'}
          btn={'See all'}
          height={100}
          width={140}
          pharagraph={undefined}
          onPress={undefined}
          padding={undefined}
        />
        <ListContentCourse
          content={'Physic'}
          btn={'See all'}
          height={100}
          width={140}
          pharagraph={undefined}
          onPress={undefined}
          padding={undefined}
        />
        <ListContentCourse
          content={'Network'}
          btn={'See all'}
          height={100}
          width={140}
          pharagraph={undefined}
          onPress={undefined}
          padding={undefined}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styleWidgetHomeScreen = StyleSheet.create({
  containerOfChart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 100,
    borderRadius: 16,
    backgroundColor: brandingColor.blue3,
  },
});
