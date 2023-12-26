import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import HeaderBar from '../components/header_bar';
import brandingColor from '../components/branding_color';
import Search from '../components/search';
import ListContentCourse from '../components/listContentCourse';
import ContentCourse from '../components/content_course';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{paddingBottom: 30}}>
      <View>
        <HeaderBar />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <Search
          object={'Explore'}
          leadingIcon={'search'}
          placeHolder={'Find your courses'}
        />
        <ContentCourse content={'Continue Course'} />
        <View style={styleWidgetHomeScreen.containerOfChart}>
          <Text> Chart do not complete</Text>
        </View>
        <View style={styleWidgetHomeScreen.containerOfChart}>
          <Text> Chart do not complete</Text>
        </View>
        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/be769047-17bc-4fff-8c81-78f347c7cfe6.webp'
          }
          pharagraph={
            'Build better tools for the next generation of doers and innovators. '
          }
          objContent={'Popular Course'}
          height={0}
          width={0}
          author={''}
        />
        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/be769047-17bc-4fff-8c81-78f347c7cfe6.webp'
          }
          pharagraph={
            'Build better tools for the next generation of doers and innovators. '
          }
          objContent={'Popular Course'}
          height={100}
          width={170}
          author={''}
        />

        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/63fc7c5751508ff62e6ce857/images/f99b06a1-2d5b-4313-b7a6-dd68362c8533.PNG'
          }
          pharagraph={'What’s going on with Vladimir Putin after the mutiny?'}
          objContent={'Library'}
          height={150}
          width={120}
          author={'By: Diana'}
        />
        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/64dc811d25ce5ca36d40c64e/images/4f96b972-1a35-4711-b2bd-ff94c9db4cbc.jpg'
          }
          pharagraph={'“បើគេលែងត្រលប់”'}
          objContent={'Kaset'}
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
    backgroundColor: brandingColor.blue30,
  },
});
