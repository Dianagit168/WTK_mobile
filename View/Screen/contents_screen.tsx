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

const DATA = [
  {
    d: 'A',
  },
  {
    d: 'A',
  },
  {
    d: 'A',
  },
  {
    d: 'A',
  },
  {
    d: 'A',
  },
];

export default function ContentScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <SafeAreaView style={{paddingTop: 15, paddingBottom: 30}}>
      <View>
        <HeaderBar />
      </View>
      <ScrollView style={{marginHorizontal: 10}}>
        <View>
          <Carousel
            data={[...Array(5)]}
            sliderWidth={350}
            itemWidth={250}
            loop={true}
            renderItem={({}) => (
              <View style={styleWidgetHomeScreen.carouselItem}>
                <Image
                  source={{
                    uri: 'https://e3.365dm.com/18/12/2048x1152/skynews-vladimir-putin-vladimir-putin-russia_4533542.jpg',
                  }}
                  style={styleWidgetHomeScreen.image}
                />
                <View style={styleWidgetHomeScreen.overlay}>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      marginTop: 5,
                      marginRight: 5,
                    }}>
                    <BoldText
                      contentT={'News'}
                      colorT={brandingColor.white}
                      fontSizeT={10}
                      backColorI={'red'}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <BoldText
                      contentT={
                        'Call for law to curb creeping influence from hostile foreign powers '
                      }
                      colorT={brandingColor.blueBlack100}
                      fontSizeT={10}
                      backColorI={brandingColor.blueBlack30}
                    />
                  </View>

                  {/* Add more overlay widgets as needed */}
                </View>
              </View>
            )}
          />
          <Pagination
            dotsLength={DATA.length}
            activeDotIndex={activeSlide}
            containerStyle={styleWidgetHomeScreen.paginationContainer}
            dotStyle={styleWidgetHomeScreen.dotStyle}
            inactiveDotStyle={styleWidgetHomeScreen.inactiveDotStyle}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.7}
          />
        </View>
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
  carouselItem: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: brandingColor.blue100,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  paginationContainer: {
    marginTop: -30,
  },
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 16,
    backgroundColor: 'red',
  },
  inactiveDotStyle: {
    marginRight: -10,
    backgroundColor: brandingColor.blueBlack30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
});
