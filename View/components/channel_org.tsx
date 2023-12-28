import {View, Text, Image} from 'react-native';
import React from 'react';
import brandingColor from './branding_color';
import BoldText from './bold_text';
import NormalText from './normal_text';
interface ChannelOrgProps {
  thumbnail: string;
  name: string;
  subTit: string;
  nameCol: string;
}

export default function ChannelOrg({name, subTit, nameCol ,thumbnail}: ChannelOrgProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: 170,
      }}>
      <Image
        source={{
          uri: thumbnail
        }}
        style={{
          height: 45,
          resizeMode: 'cover',
          width: 45,
          borderRadius: 50,
        }}
      />
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
