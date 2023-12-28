// Screen1.tsx
import {
  Airplay,
  ChevronDown,
  ChevronUp,
  DoorOpen,
  GraduationCap,
  ListVideo,
  LocateIcon,
  Map,
  MapPin,
} from 'lucide-react-native';
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import BoldText from '../components/bold_text';
import brandingColor from '../components/branding_color';
import BtnCustom from '../components/button_custom';
import NormalText from '../components/normal_text';
import ListContentCourse from '../components/listContentCourse';
import {CableCar} from 'lucide-react';
import ChannelOrg from '../components/channel_org';
import Divider from '../components/devider';

export default function ProfileOwned() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: 20}}>
      <ChanelOwned />
    </ScrollView>
  );
}
function ChanelOwned() {
  return (
    <View>
      <View>
        <ChannelOrg
          name={'KOOMPI official'}
          subTit={'1M subscribe'}
          nameCol={brandingColor.blueBlack100}
        />
        <BtnCustom
          obj={'Explore'}
          iCol={''}
          borderRa={16}
          fnOnP={undefined}
          objColor={brandingColor.blue3}
        />
        <Divider />
      </View>
      <View>
        <ChannelOrg
          name={'Yum in a minute'}
          subTit={'60K subscribe'}
          nameCol={brandingColor.blueBlack100}
        />
        <BtnCustom
          obj={'Follow'}
          iCol={''}
          borderRa={16}
          fnOnP={undefined}
          objColor={brandingColor.blue3}
        />
        <Divider />
      </View>
      <View>
        <ChannelOrg
          name={'Whild life'}
          subTit={'50K subscribe'}
          nameCol={brandingColor.blueBlack100}
        />
        <BtnCustom
          obj={'Follow'}
          iCol={''}
          borderRa={16}
          fnOnP={undefined}
          objColor={brandingColor.blue3}
        />
        <Divider />
      </View>
    </View>
  );
}
