import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '../components/header_bar';
import brandingColor from '../components/branding_color';

import Search from '../components/search';
import ListContentCourse from '../components/listContentCourse';

import CarouselCustom from '../components/carousel_custom';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BoldText from '../components/bold_text';
interface carouLibProps {
  tamnail: string;
  content: string;
}
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

export default function LibraryScreen() {
  return (
    <SafeAreaView style={{paddingTop: 15, paddingBottom: 30}}>
      <View>
        <HeaderBar />
      </View>
      <ScrollView style={{marginHorizontal: 20}}>
        <Search
          object={'Explore'}
          leadingIcon={'search'}
          placeHolder={'Find your book'}
        />

        <CarouselForLib
          tamnail={
            'https://api.weteka.org/public/orgs/63fc7c5751508ff62e6ce857/images/a2cc6199-a000-4de3-bcd9-c28df5cca0e4.png'
          }
          content={
            'អក្សរសិល្ប៍ និង​ភាសា​ខ្មែរ​កណ្ដាល​តាម​រយៈ​សិលាចារឹក​នគរវត្ត'
          }
        />

        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/63fc7c5751508ff62e6ce857/images/a2cc6199-a000-4de3-bcd9-c28df5cca0e4.png'
          }
          pharagraph={
            'អក្សរសិល្ប៍ និង​ភាសា​ខ្មែរ​កណ្ដាល​តាម​រយៈ​សិលាចារឹក​នគរវត្ត'
          }
          objContent={'Aksor sel khmer'}
          height={150}
          width={120}
          author={'By: Diana'}
        />
        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/63fc7c5751508ff62e6ce857/images/ca7f27f6-7362-4a8f-b7eb-6ada0ec2c38d.png'
          }
          pharagraph={'Curricula Upper Secondary Education - Maths'}
          objContent={'Math'}
          height={150}
          width={120}
          author={'By: Diana'}
        />
        <ListContentCourse
          tamnail={
            'https://api.weteka.org/public/orgs/63fc7c5751508ff62e6ce857/images/e371bbac-a671-4fcd-aeff-b9e26dd78d69.png'
          }
          pharagraph={'ប្រវត្តិសាស្ត្រ​កម្ពុជា​ក្នុង​បរិបទ​សកលលោក'}
          objContent={'History'}
          height={150}
          width={120}
          author={'By: Diana'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
function CarouselForLib({content, tamnail}: carouLibProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View>
      <Carousel
        data={[...Array(5)]}
        sliderWidth={350}
        itemWidth={130}
        inactiveSlideScale={0}
        loop={true}
        renderItem={({}) => (
          <View>
            <View style={libStyle.carouselImg}>
              <Image
                source={{
                  uri: tamnail,
                }}
                style={libStyle.image}
              />
            </View>
            <BoldText
              contentT={content}
              colorT={brandingColor.blueBlack100}
              fontSizeT={15}
              backColorI={''}
              paddingVer={0}
              paddingHor={0}
            />
          </View>
        )}
      />
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={activeSlide}
        containerStyle={libStyle.paginationContainer}
        dotStyle={libStyle.dotStyle}
        inactiveDotStyle={libStyle.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.7}
      />
    </View>
  );
}
const libStyle = StyleSheet.create({
  carouselImg: {
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  paginationContainer: {
    marginTop: -15,
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
});
