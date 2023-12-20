import React, {useState, useEffect} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

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
    outputRange: [300, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View style={[styles.appBar, {height: appBarHeight}]}>
        <Image
          source={{
            uri: 'https://api.weteka.org/public/orgs/64dc811d25ce5ca36d40c64e/images/1465803e-96d8-461c-9526-d4f93779550a.jpg',
          }}
          style={{height: 300, width: '100%', resizeMode: 'cover'}}
        />
      </Animated.View>
      <ScrollView
        style={{flex: 1}}
        onScroll={handleScroll}
        scrollEventThrottle={5} // Adjust the throttle as needed
      >
        {/* Your scrollable content goes here */}
        <View
          style={{
            height: 1000,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Nisi integer ultrices sit
            sociis fermentum tincidunt sed quis. Leo diam sed eget in vestibulum
            placerat justo. Semper magna amet cum volutpat massa et. Lectus
            ipsum mollis suspendisse a id egestas pretium ac. Venenatis enim
            cras orci pulvinar nec mauris egestas viverra elementum. Ornare
            placerat vitae risus cras lorem aliquet tempor aliquet. Felis non
            magna varius aliquam bibendum id. Pellentesque aenean ultrices
            condimentum elementum nam. Nullam urna et nascetur lectus. Neque
            vitae lobortis varius ultricies dapibus nisl dui vulputate. Nunc
            eget nibh et purus a ultrices. Cursus diam bibendum nec sed bibendum
            pellentesque mauris bibendum orci. Porta a aliquet ac a scelerisque
            quis. Nec mattis pulvinar sapien mauris ut dignissim nulla euismod.
            Mauris at vitae consectetur diam senectus volutpat molestie elit
            nec. Curabitur in viverra feugiat facilisis ipsum consequat nunc
            donec. Pharetra nisi vitae at mi commodo. Aliquam ut ut lectus quis
            risus magna gravida purus. Rhoncus vel amet velit enim lacinia quam.
            Suspendisse nibh aliquam lacus aliquam vitae pharetra imperdiet.
            Rutrum quis curabitur nisl lacus interdum etiam nisl nec. Dolor
            sapien at morbi ullamcorper facilisis. Enim neque in ornare
            venenatis elementum pharetra. Urna etiam elit ac erat mattis nunc
            viverra consequat. Fringilla dis adipiscing a nullam blandit sed.
            Lorem non cursus tristique tempus proin morbi nibh faucibus. Metus a
            blandit nulla orci nulla viverra. Malesuada eget magna non sed eget
            molestie pharetra. In et enim vel sociis massa urna faucibus. Eget
            quam tellus interdum turpis. At enim elit non imperdiet aenean nibh.
            Turpis dictum lectus donec cursus tortor dolor et blandit est. Mi
            duis felis turpis augue in gravida. Rhoncus sed quisque ac dictum
            non bibendum fames elementum mauris. Consequat scelerisque eu
            adipiscing convallis ultrices cras gravida habitasse. Tellus vivamus
            morbi integer aliquam sem. Imperdiet mattis luctus et eget mauris.
            Sed consectetur blandit malesuada fusce amet feugiat. Fermentum mi
            aliquet mi feugiat vehicula. Est rhoncus erat et auctor. Fermentum
            eget ultrices tristique maecenas ultrices odio rhoncus arcu. Est
            vitae condimentum risus egestas massa. Purus amet augue quis est
            risus parturient faucibus. Tortor et sem adipiscing vulputate odio.
            Morbi euismod sed lectus rhoncus. Pretium et commodo id vestibulum.
            Aliquet placerat sed quam at. Aliquam porttitor vitae molestie
            egestas{' '}
          </Text>
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
