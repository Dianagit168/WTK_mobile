import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BoldText from './bold_text';
import brandingColor from './branding_color';
interface btnProps {
  obj: string;
  bacColor: string;
  borderRa: number;
}

export default function BtnCustom({obj, bacColor, borderRa}: btnProps) {
  return (
    <View style={{paddingBottom: 20, paddingTop: 10}}>
      <TouchableOpacity style={style.btnContainer}>
        <BoldText
          contentT={obj}
          colorT={brandingColor.white}
          backColorI={''}
          fontSizeT={10}
          paddingVer={0}
          paddingHor={0}
        />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: brandingColor.blue100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
