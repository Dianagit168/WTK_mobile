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

export default function ProfileFollowing() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: 20}}>
      <ChanelFollowing />
    </ScrollView>
  );
}
function ChanelFollowing() {
  return (
    <View>
      <View>
        <ChannelOrg
          name={'JavaScript Learner'}
          subTit={'10K subscribe'}
          nameCol={brandingColor.blueBlack100}
          thumbnail={
            'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/5f2f3ac6-02ec-4f32-ae76-d3c223f3c2a6.png'
          }
        />
        <View style={{width: '85%', alignSelf: 'flex-end', marginTop: -7}}>
          <BtnCustom
            obj={'Follow'}
            iCol={''}
            borderRa={16}
            fnOnP={undefined}
            objColor={brandingColor.blue3}
          />
        </View>
        <Divider />
      </View>
      <View>
        <ChannelOrg
          name={'Smart interior'}
          subTit={'4K subscribe'}
          nameCol={brandingColor.blueBlack100}
          thumbnail={
            'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/5f2f3ac6-02ec-4f32-ae76-d3c223f3c2a6.png'
          }
        />
        <View style={{width: '85%', alignSelf: 'flex-end', marginTop: -7}}>
          <BtnCustom
            obj={'Unfollow'}
            iCol={''}
            borderRa={16}
            fnOnP={undefined}
            objColor={brandingColor.blue3}
          />
        </View>
        <Divider />
      </View>
    </View>
  );
}
