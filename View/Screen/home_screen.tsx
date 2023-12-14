import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import HeaderBar from "../components/header_bar";
import brandingColor from "../components/branding_color";
import Search from "../components/search";
import ListContentCourse from "../components/listContentCourse";
import ContentCourse from "../components/content_course";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ paddingTop: 15, paddingBottom: 30 }}>
      <View>
        <HeaderBar />
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Search
          object={"Explore"}
          leadingIcon={"search"}
          placeHolder={"Find your courses"}
        />
        <ContentCourse
          content={"Continue Course"}
          btn={"See all"}
          onPress={undefined}
        />
        <View style={styleWidgetHomeScreen.containerOfChart}>
          <Text> Chart do not complete</Text>
        </View>
        <View style={styleWidgetHomeScreen.containerOfChart}>
          <Text> Chart do not complete</Text>
        </View>
        <ListContentCourse
          content={"Popular Course"}
          btn={"See all"}
          height={100}
          width={140}
          pharagraph={undefined}
          onPress={undefined}
          padding={undefined}
        />
        <ListContentCourse
          content={"Library"}
          btn={"See all"}
          height={170}
          width={120}
          pharagraph={undefined}
          onPress={undefined}
          padding={undefined}
        />
        <ListContentCourse
          content={"Kaset"}
          pharagraph={"Phragraph"}
          padding={8}
          btn={"See all"}
          height={100}
          width={140}
          onPress={undefined}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styleWidgetHomeScreen = StyleSheet.create({
  containerOfChart: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 100,
    borderRadius: 16,
    backgroundColor: brandingColor.blue3,
  },
});
