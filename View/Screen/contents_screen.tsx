import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '../components/header_bar';
import brandingColor from '../components/branding_color';

import Search from '../components/search';

import CarouselCustom from '../components/carousel_custom';
import {AudioLines} from 'lucide-react-native';
import SemiBoldText from '../components/semi_bold_text';
import BoldText from '../components/bold_text';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default function ContentScreen() {
  return (
    <SafeAreaView style={{paddingBottom: 30}}>
      <HeaderBar iconSearch={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 10}}>
        <UserOnline />
        <CarouselCustom
          content="What’s going on with Vladimir Putin after the mutiny?"
          tamnail={
            'data:image/jpeg;base64,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'
          }
          news={'News'}
          itemWidth={200}
          inactiveSlideScale={0.8}
          sliderWidth={350}
          contentBook={''}
          newsBack={'red'}
          contentBack={brandingColor.blue30}
        />
        <ListNews
          objList="Budism"
          tamnail="https://i1.sndcdn.com/artworks-PAwIUccWqSV0sJUT-0Wvlzg-t500x500.jpg"
          content={'រៀនរំងាប់ចិត្តខឹង, san sochea | សាន សុជា'}
          duration={'10 mins read'}
          date={'Today'}
        />
        <ListNews
          objList="News"
          tamnail="https://media.cnn.com/api/v1/images/stellar/prod/231214133416-01-eu-accession-ukraine-moldova-121423.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
          content={'EU to open membership talks with Ukraine and Moldova '}
          duration={'5 mins read'}
          date={'Today'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

interface ListItemProps {
  objList: string;
  tamnail: string;
  content: string;
  duration: string;
  date: string;
}

function ListNews({objList, tamnail, content, duration, date}: ListItemProps) {
  return (
    <View style={{marginBottom: 17}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <BoldText
          contentT={objList}
          fontSizeT={14}
          colorT={brandingColor.blueBlack100}
          backColorI={''}
          paddingVer={0}
          paddingHor={0}
        />
        <SemiBoldText
          contentT={'See all'}
          fontSizeT={13}
          colorT={brandingColor.blue100}
        />
      </View>

      <FlatList
        data={[...Array(3)]}
        renderItem={({}) => (
          <View style={styleWidgetHomeScreen.backListNews}>
            <Image
              source={{
                uri: tamnail,
              }}
              style={styleWidgetHomeScreen.tamnailCon}
            />
            <View
              style={{
                width: '78%',
                marginRight: 10,
                marginLeft: 10,
              }}>
              <BoldText
                contentT={content}
                fontSizeT={14}
                colorT={brandingColor.blueBlack100}
                backColorI={''}
                paddingVer={0}
                paddingHor={0}
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
                  contentT={duration}
                  fontSizeT={11}
                  colorT={brandingColor.blue100}
                />
                <SemiBoldText
                  contentT={date}
                  fontSizeT={11}
                  colorT={brandingColor.blue100}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
function UserOnline() {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={[...Array(10)]}
      renderItem={({}) => (
        <View
          style={{
            width: 55,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              height: 55,
              marginBottom: 5,
            }}>
            <Image
              source={{
                uri: 'https://api.weteka.org/public/orgs/633549822365046d36dc5d1c/images/5f2f3ac6-02ec-4f32-ae76-d3c223f3c2a6.png',
              }}
              style={{
                resizeMode: 'cover',
                borderRadius: 50,
                height: 55,
              }}
            />
          </View>
          <SemiBoldText
            contentT={'Weteka official'}
            colorT={brandingColor.blueBlack60}
            fontSizeT={11}
          />
        </View>
      )}
    />
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
