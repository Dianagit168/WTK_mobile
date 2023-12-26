import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import brandingColor from './branding_color';

const wtklogo = require('./../../assets/wetekalogo.png');
import {Home, Search, Bell, Scan} from 'lucide-react-native';
import BoldText from './bold_text';

export default function HeaderBar({iconSearch = false, isLogo = true}: any) {
  return (
    <View style={styleHB.hbContainer}>
      {isLogo && (
        <Image
          source={wtklogo}
          style={{
            resizeMode: 'contain',
            height: 50,
            width: 120,
          }}
        />
      )}
      {!isLogo && (
        <View>
          <BoldText
            contentT={'Menu'}
            colorT={brandingColor.blueBlack100}
            backColorI={''}
            fontSizeT={25}
            paddingVer={10}
            paddingHor={0}
          />
        </View>
      )}
      <View style={styleHB.iconContainer}>
        {iconSearch && (
          <Search
            style={{marginRight: 25}}
            color={brandingColor.blueBlack100}
            size={23}
            strokeWidth={2.2}
          />
        )}
        <Bell
          style={{marginRight: 25}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />
        <Scan
          style={{}}
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2.2}
        />
      </View>
    </View>
  );
}
const styleHB = StyleSheet.create({
  hbContainer: {
    height: 65,
    width: '100%',
    //backgroundColor: brandingColor.blue100,
    paddingHorizontal: 18,

    justifyContent: 'space-between',

    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 25,
    marginLeft: 15,
  },
});
