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
          tamnail={
            'https://api.weteka.org/public/orgs/undefined/images/6a99511d-9b7f-4a76-a5ce-6ebf607fbb5d.png'
          }
          news={'Education'}
          content={'សីលធម៌-ពលរដ្ឋវិជ្ជា ថ្នាក់ទី១២'}
          itemWidth={200}
          inactiveSlideScale={0.8}
          sliderWidth={350}
          contentBook={''}
          newsBack={brandingColor.blueBlack100}
          contentBack={brandingColor.blue30}
        />

        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/633b909c47978679369cb69e/images/cb0ec7d5-e6eb-412b-8bdd-0b2374f54d57.jpg'
          }
          pharagraph={'គណិតវិទ្យាថ្នាក់ទី៩'}
          objContent={'Math'}
          height={100}
          width={170}
          author={'By: Diana'}
        />
        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/undefined/images/a9c89872-6974-4af5-8682-a644cce7602c.png'
          }
          pharagraph={'ផែនដីវិទ្យា ថ្នាក់ទី១២'}
          objContent={'Earth'}
          height={100}
          width={170}
          author={'By: Diana'}
        />
        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/63fc7c5751508ff62e6ce857/images/a2cc6199-a000-4de3-bcd9-c28df5cca0e4.png'
          }
          pharagraph={
            'អក្សរសិល្ប៍ និង​ភាសា​ខ្មែរ​កណ្ដាល​តាម​រយៈ​សិលាចារឹក​នគរវត្ត'
          }
          objContent={'Aksor sel khmer'}
          height={100}
          width={170}
          author={'By: Diana'}
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
