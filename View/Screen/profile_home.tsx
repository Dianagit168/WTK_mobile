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

export default function ProfileHome() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: 20}}>
      <View style={{marginBottom: 20}}>
        <Collapsible collapsed={isCollapsed} align="center">
          <AboutInfo />
        </Collapsible>

        {isCollapsed && (
          <BtnCustom
            obj={'See more'}
            iCol={''}
            borderRa={16}
            fnOnP={toggleCollapse}
            objColor={''}
          />
        )}
        {!isCollapsed && (
          <BtnCustom
            obj={'See less'}
            iCol={''}
            borderRa={16}
            fnOnP={toggleCollapse}
            objColor={''}
          />
        )}
        <OwnedContent />
      </View>
    </ScrollView>
  );
}
function AboutInfo() {
  return (
    <View
      style={{
        //  backgroundColor: brandingColor.blue30,
        marginTop: 30,
        paddingVertical: 10,
      }}>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <MapPin
          style={{marginRight: 8}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />
        <NormalText
          contentT={'origin'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={8}
          numberOfLines={0}
        />
        <BoldText
          contentT={'Kompong Cham'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <MapPin
          style={{marginRight: 8}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />
        <NormalText
          contentT={'live in'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={8}
          numberOfLines={0}
        />
        <BoldText
          contentT={'Phnom Penh'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <GraduationCap
          style={{marginRight: 8}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />
        <NormalText
          contentT={'studied at'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={8}
          numberOfLines={0}
        />
        <BoldText
          contentT={'TIC'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <ListVideo
          style={{marginRight: 8}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />

        <BoldText
          contentT={'3 Courses'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={8}
        />
        <NormalText
          contentT={'owned'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
          numberOfLines={0}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <DoorOpen
          style={{marginRight: 8}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />

        <BoldText
          contentT={'2 Following'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={8}
        />
        <NormalText
          contentT={'schools'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
          numberOfLines={0}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Airplay
          style={{marginRight: 8}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />

        <NormalText
          contentT={'Enrollment'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={8}
          numberOfLines={0}
        />
        <BoldText
          contentT={'3 Courses'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
        />
      </View>
    </View>
  );
}
function OwnedContent() {
  return (
    <View style={{marginBottom: 20}}>
      <BoldText
        contentT={'Owned Contents'}
        colorT={brandingColor.blueBlack100}
        backColorI={''}
        fontSizeT={13}
        paddingVer={10}
        paddingHor={0}
      />

      <FlatList
        data={[...Array(5)]}
        renderItem={({}) => (
          <View style={style.container}>
            <Image
              source={{
                uri: 'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/be769047-17bc-4fff-8c81-78f347c7cfe6.webp',
              }}
              style={{
                height: 170,
                resizeMode: 'cover',
                width: '100%',
                borderRadius: 16,
                marginBottom: 10,
              }}
            />
            <BoldText
              contentT={
                'Build better tools for the next generation of doers and innovators.'
              }
              colorT={brandingColor.blueBlack100}
              backColorI={''}
              fontSizeT={15}
              paddingVer={0}
              paddingHor={0}
            />
            <ChannelOrg
              name={'KOOMPI official'}
              subTit={'2 hours ago'}
              nameCol={brandingColor.blueBlack60}
              thumbnail={
                'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/5f2f3ac6-02ec-4f32-ae76-d3c223f3c2a6.png'
              }
            />
          </View>
        )}
        numColumns={1}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {marginBottom: 20},
  imageContainer: {
    borderRadius: 16,
    justifyContent: 'center',

    backgroundColor: brandingColor.blue30,
  },
});
