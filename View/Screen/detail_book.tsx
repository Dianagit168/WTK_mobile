import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import brandingColor from '../components/branding_color';

import ChannelOrg from '../components/channel_org';
import VideoPlayer from 'react-native-video-player';

import SemiBoldText from '../components/semi_bold_text';
import BoldText from '../components/bold_text';

import {Star, PenSquare} from 'lucide-react-native';

import NormalText from '../components/normal_text';
import BtnCustom from '../components/button_custom';
interface AboutTheBookAttrib {
  nmtxt: string;
  bldtxt: string;
}

export default function DetailBook() {
  return (
    <SafeAreaView>
      <ScrollView style={{paddingHorizontal: 10, marginBottom: 50}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styleForDetailBook.imageContainer}>
            <Image
              source={{
                uri: 'https://api.weteka.org/public/orgs/63fc7c5751508ff62e6ce857/images/ca7f27f6-7362-4a8f-b7eb-6ada0ec2c38d.png',
              }}
              style={styleForDetailBook.image}
              {...{height: 200}}
            />
          </View>
          <ChannelOrg />
          <BoldText
            contentT={'Curricula Upper Secondary Education - Maths'}
            colorT={brandingColor.blueBlack100}
            backColorI={''}
            fontSizeT={15}
            paddingVer={25}
            paddingHor={0}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <Rating />
            <Rating />
            <Rating />
          </View>
        </View>
        <BoldText
          contentT={'About the book'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={15}
          paddingVer={15}
          paddingHor={0}
        />

        <AboutTheBookAttrib nmtxt={'Author'} bldtxt={'KOOMPI'} />
        <AboutTheBookAttrib nmtxt={'Published'} bldtxt={'KOOMPI'} />
        <AboutTheBookAttrib nmtxt={'Updated'} bldtxt={'KOOMPI'} />
        <AboutTheBookAttrib nmtxt={'Language'} bldtxt={'Enlish'} />
        <AboutTheBookAttrib nmtxt={'Categories'} bldtxt={'Technology'} />

        <BtnCustom obj={'Read'} BacColor={brandingColor.blueBlack100} borderRa={10} />
      </ScrollView>
    </SafeAreaView>
  );
}
function Rating() {
  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 70,
        marginBottom: 20,
      }}>
      <Star color={brandingColor.blue100} size={30} strokeWidth={2} />
      <BoldText
        contentT={'4.5'}
        colorT={brandingColor.blueBlack100}
        fontSizeT={11}
        backColorI={''}
        paddingVer={0}
        paddingHor={0}
      />
      <NormalText
        contentT={'Rating,'}
        colorT={brandingColor.blueBlack60}
        backColorI={''}
        fontSizeT={9}
        paddingVer={0}
        paddingHor={0}
      />
    </View>
  );
}

function AboutTheBookAttrib({nmtxt, bldtxt}: AboutTheBookAttrib) {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <PenSquare color={brandingColor.blueBlack100} size={20} strokeWidth={2} />
      <NormalText
        contentT={nmtxt}
        colorT={brandingColor.blueBlack60}
        backColorI={''}
        fontSizeT={12}
        paddingVer={0}
        paddingHor={5}
      />
      <BoldText
        contentT={bldtxt}
        colorT={brandingColor.blueBlack100}
        backColorI={''}
        fontSizeT={12}
        paddingVer={0}
        paddingHor={0}
      />
    </View>
  );
}

const styleForDetailBook = StyleSheet.create({
  backSubVideo: {
    flexDirection: 'row',
    marginTop: 10,
    height: 80,
    width: '97%',
    paddingVertical: 4,
    paddingHorizontal: 8,

    backgroundColor: brandingColor.blueBlack3,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  subVideoContainer: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: brandingColor.blueBlack100,

    borderRadius: 16,
  },
  backLesson: {
    marginBottom: 35,
    marginHorizontal: 20,

    paddingVertical: 4,
    paddingHorizontal: 15,
    transform: [{rotate: '40deg'}],
    backgroundColor: '#a31515',

    borderRadius: 16,
  },
  imageContainer: {
    width: 140,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: brandingColor.pink,

    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
});
