import React, {useState, useEffect} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import BoldText from '../components/bold_text';
import brandingColor from '../components/branding_color';

export default function ReadKaset() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {
      useNativeDriver: false,
    },
  );

  const appBarHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [200, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[styles.appBar, {height: appBarHeight}]}></Animated.View>
      <ScrollView
        style={{flex: 1}}
        onScroll={handleScroll}
        scrollEventThrottle={5} // Adjust the throttle as needed
      >
        {/* Your scrollable content goes here */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://api.weteka.org/public/orgs/64dc811d25ce5ca36d40c64e/images/1465803e-96d8-461c-9526-d4f93779550a.jpg',
            }}
            style={{height: 200, width: '100%', resizeMode: 'cover'}}
          />
          <View>
            <BoldText
              contentT={'“បើអ្នកអស់ចិត្ត”'}
              colorT={brandingColor.blueBlack100}
              backColorI={''}
              fontSizeT={15}
              paddingVer={0}
              paddingHor={0}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  appBarText: {
    color: 'white',
    fontSize: 18,
  },
});
