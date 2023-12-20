import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface btnProps {
  obj: string;
  bacColor: string;
  borderRa: number;
}

export default function BtnNoBack({obj, bacColor, borderRa}: btnProps) {
  return (
    <View style={{paddingBottom: 7, paddingTop: 20}}>
      <TouchableOpacity style={style.btnContainer}>
        <Icon name="google" size={23} color={'#0073FF'} />

        <Text
          style={{
            color: '#0073FF',
            fontSize: 17,
            fontWeight: '400',
          }}>
          {obj}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    height: 50,
    borderColor: '#0073FF',
    borderRadius: 50,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
