import React from 'react';
import {View, StyleSheet} from 'react-native';
import brandingColor from './branding_color';

const Divider = ({marVer}: any) => {
  return <View style={styles.divider} {...{marginVertical: marVer}} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 0.7,
    backgroundColor: brandingColor.blueBlack30,
  },
});

export default Divider;
