import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BoldText from './bold_text';
import brandingColor from './branding_color';
import {BookOpen} from 'lucide-react-native';
interface btnProps {
  obj: string;
  bacColor: string;
  borderRa: number;
  isIcon: boolean;
}

export default function BtnCustom({
  obj,
  bacColor,
  borderRa,
  isIcon = true,
}: btnProps) {
  return (
    <View>
      <TouchableOpacity style={style.btnContainer}>
        <BookOpen color={brandingColor.white} size={23} strokeWidth={2} />
        <BoldText
          contentT={obj}
          colorT={brandingColor.white}
          backColorI={''}
          fontSizeT={15}
          paddingVer={0}
          paddingHor={10}
        />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    borderRadius: 16,
    marginVertical: 20,
    backgroundColor: brandingColor.blue100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
