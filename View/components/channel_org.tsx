import {View, Text} from 'react-native';
import React from 'react';
import brandingColor from './branding_color';
import BoldText from './bold_text';
import NormalText from './normal_text';
interface ChannelOrgProps {
  logo: String;
  name: string;
  subTit: string;
  nameCol: string;
}

export default function ChannelOrg({
  logo,
  name,
  subTit,
  nameCol,
}: ChannelOrgProps) {
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
          {logo}
        </Text>
      </View>
      <View style={{marginLeft: 7, width: 150}}>
        <BoldText
          contentT={name}
          colorT={nameCol}
          backColorI={''}
          fontSizeT={14}
          paddingVer={0}
          paddingHor={0}
        />
        <NormalText
          contentT={subTit}
          colorT={brandingColor.blueBlack60}
          backColorI={''}
          fontSizeT={10}
          paddingVer={0}
          paddingHor={0}
          numberOfLines={0}
        />
      </View>
    </View>
  );
}
