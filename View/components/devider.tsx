import React from 'react';
import {View, StyleSheet} from 'react-native';
import brandingColor from './branding_color';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 0.7,
    backgroundColor: brandingColor.blueBlack30,
    marginVertical: 15, // Adjust this value to control the space above and below the divider
  },
});

export default Divider;
