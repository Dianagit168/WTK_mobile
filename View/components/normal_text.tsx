import {View, Text} from 'react-native';
import React from 'react';
interface btProp {
  contentT: string;
  colorT: string;
  backColorI: string;
  fontSizeT: number;
  paddingVer: number;
  paddingHor: number;
  numberOfLines: number;
}

export default function NormalText({
  contentT,
  colorT,
  fontSizeT,
  backColorI,
  paddingHor,
  paddingVer,
  numberOfLines,
}: btProp) {
  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        style={{
          textAlign: 'justify',
          borderRadius: 16,
          paddingHorizontal: paddingHor,
          paddingVertical: paddingVer,
          fontWeight: 'normal',
          fontSize: fontSizeT,
          color: colorT,
          backgroundColor: backColorI,
        }}>
        {contentT}
      </Text>
    </View>
  );
}
