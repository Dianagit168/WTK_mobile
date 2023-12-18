import {View, Text} from 'react-native';
import React from 'react';
import brandingColor from './branding_color';
import BoldText from './bold_text';
import NormalText from './normal_text';

export default function ChannelOrg() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: 170,
      }}>
      <View
        style={{
          height: 45,
          width: 45,
          backgroundColor: brandingColor.blueBlack100,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: brandingColor.white,
            fontSize: 8,
          }}>
          KOOMPI
        </Text>
      </View>
      <View style={{marginLeft: 7, width: 150}}>
        <BoldText
          contentT={'KOOMPI Official'}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
        />
        <NormalText
          contentT={'3k subscribe'}
          colorT={brandingColor.blueBlack60}
          backColorI={''}
          fontSizeT={12}
          paddingVer={0}
          paddingHor={0}
        />
      </View>
    </View>
  );
}
