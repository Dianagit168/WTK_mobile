import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ChannelOrg from '../components/channel_org';
import brandingColor from '../components/branding_color';
import BoldText from '../components/bold_text';
import Divider from '../components/devider';
import {RefreshCw} from 'lucide-react-native';
import GridView from '../components/grid_view';
import BtnCustom from '../components/button_custom';
import HeaderBar from '../components/header_bar';

export default function MenuScreen() {
  return (
    <SafeAreaView>
      <HeaderBar iconSearch={true} isLogo={false} />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ChannelOrg
              logo={'User Logo'}
              name={'Diana Lolz'}
              subTit={'See your profile'}
              nameCol={brandingColor.blue100}
            />
            <View style={{marginTop: 10}}>
              <RefreshCw
                color={brandingColor.blue100}
                size={45}
                strokeWidth={1.3}
              />
              <View style={settingScreenStyle.stack}>
                <View
                  style={{
                    marginBottom: 0.8,
                    height: 30,
                    width: 30,
                    backgroundColor: brandingColor.blueBlack100,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <BoldText
                    contentT={'KOOMPI'}
                    colorT={brandingColor.white}
                    backColorI={''}
                    fontSizeT={7}
                    paddingVer={0}
                    paddingHor={0}
                  />
                </View>
              </View>
            </View>
          </View>
          <Divider />
          <GridView gridName={'Shortcuts'} langthList={4} />
          <GridView gridName={'Comunity'} langthList={3} />
          <GridView gridName={'Help & Support'} langthList={3} />
          <GridView gridName={'Settings'} langthList={3} />
          <BtnCustom
            obj={'Logout'}
            iCol={brandingColor.blue100}
            borderRa={16}
            isIcon={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const settingScreenStyle = StyleSheet.create({
  stack: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
