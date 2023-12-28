import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import BoldText from '../components/bold_text';
import brandingColor from '../components/branding_color';
import ChannelOrg from '../components/channel_org';

export default function ProfileEenrollment() {
  return (
    <View style={{marginHorizontal: 20}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...Array(5)]}
        renderItem={({}) => (
          <View style={style.container}>
            <Image
              source={{
                uri: 'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/be769047-17bc-4fff-8c81-78f347c7cfe6.webp',
              }}
              style={{
                height: 170,
                resizeMode: 'cover',
                width: '100%',
                borderRadius: 16,
                marginBottom: 10,
              }}
            />
            <BoldText
              contentT={
                'Build better tools for the next generation of doers and innovators.'
              }
              colorT={brandingColor.blueBlack100}
              backColorI={''}
              fontSizeT={15}
              paddingVer={0}
              paddingHor={0}
            />
            <ChannelOrg
              name={'KOOMPI official'}
              subTit={'2 hours ago'}
              nameCol={brandingColor.blueBlack60}
              thumbnail={
                'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/5f2f3ac6-02ec-4f32-ae76-d3c223f3c2a6.png'
              }
            />
          </View>
        )}
        numColumns={1}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {marginBottom: 20},
  imageContainer: {
    borderRadius: 16,
    justifyContent: 'center',

    backgroundColor: brandingColor.blue30,
  },
});
