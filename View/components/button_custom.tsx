import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BoldText from './bold_text';
import brandingColor from './branding_color';
import {BookOpen} from 'lucide-react-native';
interface btnProps {
  obj: string;
  objColor: string;
  iCol: string;
  borderRa: number;
  fnOnP: any;
}

export default function BtnCustom({
  obj,
  iCol,
  objColor,

  fnOnP,
}: btnProps) {
  return (
    <View>
      <TouchableOpacity style={[style.btnContainer]} onPress={fnOnP}>
        <BookOpen color={iCol} size={23} strokeWidth={2} />
        <BoldText
          contentT={obj}
          colorT={objColor}
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
    marginVertical: 10,
    backgroundColor: brandingColor.blue100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
