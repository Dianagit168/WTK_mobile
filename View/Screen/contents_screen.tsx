import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import HeaderBar from '../components/header_bar';
import brandingColor from '../components/branding_color';

import Search from '../components/search';

import CarouselCustom from '../components/carousel_custom';
import {AudioLines} from 'lucide-react-native';
import SemiBoldText from '../components/semi_bold_text';

export default function ContentScreen() {
  return (
    <SafeAreaView style={{paddingTop: 15, paddingBottom: 30}}>
      <View>
        <HeaderBar />
      </View>
      <ScrollView style={{marginHorizontal: 10}}>
        <Search
          object={'Explore'}
          leadingIcon={'search'}
          placeHolder={'Find your course'}
        />

        <CarouselCustom
          height={170}
          width={250}
          content={undefined}
          pharagraph={undefined}
          btn={undefined}
          onPress={undefined}
          padding={undefined}
        />

        <ListNews />
      </ScrollView>
    </SafeAreaView>
  );
}
function ListNews({mainContent, onPress, btn}: any) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <SemiBoldText
          contentT={mainContent}
          fontSizeT={16}
          colorT={brandingColor.blueBlack100}
        />
        <Text onPress={onPress}>{btn}</Text>
      </View>
      <View style={styleWidgetHomeScreen.backListNews}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={styleWidgetHomeScreen.tamnailCon}
        />
        <View
          style={{
            width: '78%',
            marginRight: 10,
            marginLeft: 10,
          }}>
          <SemiBoldText
            contentT={'គិតគូររឿងជីវិត, សាន សុជា | san sochea '}
            fontSizeT={16}
            colorT={brandingColor.blueBlack100}
          />

          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <SemiBoldText
              contentT={'10 mins read'}
              fontSizeT={12}
              colorT={brandingColor.blueBlack60}
            />
            <SemiBoldText
              contentT={'10 mins read'}
              fontSizeT={12}
              colorT={brandingColor.blueBlack60}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styleWidgetHomeScreen = StyleSheet.create({
  containerOfChart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 100,
    borderRadius: 16,
    backgroundColor: brandingColor.blue3,
  },
  backListNews: {
    flexDirection: 'row',
    marginTop: 10,
    height: 80,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: brandingColor.blueBlack3,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  tamnailCon: {
    height: 65,
    width: 65,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 16,
  },
});
