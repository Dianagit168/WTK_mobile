import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import brandingColor from './branding_color';

const wtklogo = require('./../../assets/wtklogo.png');
import {Home} from 'lucide-react-native';

export default function HeaderBar() {
  return (
    <View style={styleHB.hbContainer}>
      <View>
        <Image source={wtklogo} style={{resizeMode: 'contain', width: 120}} />
      </View>
    </View>
  );
}
const styleHB = StyleSheet.create({
  hbContainer: {
    height: 80,
    width: 400,

    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flexDirection: 'row',

    height: 25,
  },
  iconStyle: {
    fontSize: 25,
    marginLeft: 15,
  },
});
