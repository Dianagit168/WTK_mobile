import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import ChannelOrg from '../components/channel_org';
import brandingColor from '../components/branding_color';
import BoldText from '../components/bold_text';
import Divider from '../components/devider';
import {RefreshCw} from 'lucide-react-native';
import GridView from '../components/grid_view';
import BtnCustom from '../components/button_custom';
import HeaderBar from '../components/header_bar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import DetailVideoScreen from './detail_videos_screen';
import ReadKaset from './read_kaset';

import Screen2 from './screen2';
import TopTapBarNav from '../components/top_tapbar';

export default function ProfileAbout() {
  return (
    <SafeAreaView>
      <HeaderBar iconSearch={true} isLogo={false} />
      <ScrollView>
        <CoverAndProfile />
        <TopTapBarNav />
      </ScrollView>
    </SafeAreaView>
  );
}

function CoverAndProfile() {
  return (
    <View
      style={{
        height: 295,
      }}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/20171126_Angkor_Wat_4712_DxO.jpg',
        }}
        style={{
          height: 250,
          width: '100%',
          resizeMode: 'cover',
        }}
      />
      <View style={profileScreenStyle.stack}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PVaZ8tW-Mz3wLMhnIsTJFQ5VPdbhsIIxCas5adRZRb5UqWM_gXDqbIH8v72FaV7pRC8&usqp=CAU',
          }}
          style={{borderRadius: 50, height: 70, width: 70, resizeMode: 'cover'}}
        />
        <BoldText
          contentT={'Diana Lolz'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={15}
          paddingVer={5}
          paddingHor={0}
        />
      </View>
    </View>
  );
}
const profileScreenStyle = StyleSheet.create({
  stack: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-end',
    marginLeft: 25,
  },
});
