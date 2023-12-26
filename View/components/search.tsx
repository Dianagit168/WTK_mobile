import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Search} from 'lucide-react-native';

import brandingColor from './branding_color';
import BoldText from './bold_text';

export default function SearchField({object, placeHolder}: any) {
  {
    /* {type == "home" && <Camera color='red'/>}
      {type == "chair" && <Armchair color='red'/>} */
  }
  return (
    <View>
      <BoldText
        contentT={object}
        colorT={brandingColor.blueBlack100}
        backColorI={''}
        fontSizeT={17}
        paddingVer={10}
        paddingHor={0}
      />
      <View style={style.inputContainer}>
        <Search
          style={{marginRight: 5}}
          color={brandingColor.blueBlack60}
          size={25}
          strokeWidth={2}
        />
        <TextInput
          cursorColor={brandingColor.blueBlack60}
          style={{width: '75%'}}
          placeholder={placeHolder}
          placeholderTextColor={brandingColor.blueBlack30}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 15,
    borderColor: brandingColor.blueBlack100,
    borderWidth: 1.3,
    borderRadius: 16,
    alignItems: 'center',
  },
  objStyle: {
    fontSize: 16,
    color: brandingColor.blueBlack100,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  iconCust: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: brandingColor.blueBlack60,
  },
});
