import {View, Text} from 'react-native';
import React from 'react';
interface btProp {
  contentT: string;
  colorT: string;
  backColorI: string;
  fontSizeT: number;
}

export default function BoldText({
  contentT,
  colorT,
  fontSizeT,
  backColorI,
}: btProp) {
  return (
    <View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          borderRadius: 16,
          paddingHorizontal: 10,
          paddingVertical: 4,
          fontWeight: 'bold',
          fontSize: fontSizeT,
          color: colorT,
          backgroundColor: backColorI,
        }}>
        {contentT}
      </Text>
    </View>
  );
}
