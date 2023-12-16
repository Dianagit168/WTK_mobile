import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import brandingColor from './branding_color';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BoldText from './bold_text';
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
interface carouProps {
  tamnail: string;
  news: string;
  content: string;
  newsBack: string;
  contentBack: string;

  contentBook: string;
  itemWidth: number;
  inactiveSlideScale: number;
  sliderWidth: number;
}

export default function CarouselCustom({
  tamnail,
  news,
  content,
  itemWidth,
  inactiveSlideScale,
  sliderWidth,
  contentBook,
  contentBack,
  newsBack,
}: carouProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View>
      <Carousel
        data={[...Array(5)]}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideScale={inactiveSlideScale}
        loop={true}
        renderItem={({}) => (
          <View style={carouselStyle.carouselItem}>
            <Image
              source={{
                uri: tamnail,
              }}
              style={carouselStyle.image}
            />
            <View style={carouselStyle.overlay}>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginTop: 5,
                  marginRight: 5,
                }}>
                <BoldText
                  contentT={news}
                  colorT={brandingColor.white}
                  fontSizeT={10}
                  backColorI={newsBack} paddingVer={4} paddingHor={10}                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <BoldText
                  contentT={content}
                  colorT={brandingColor.blueBlack100}
                  fontSizeT={10}
                  backColorI={contentBack} paddingVer={4} paddingHor={10}                />
              </View>
            </View>
          </View>
        )}
      />
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={activeSlide}
        containerStyle={carouselStyle.paginationContainer}
        dotStyle={carouselStyle.dotStyle}
        inactiveDotStyle={carouselStyle.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.7}
      />
    </View>
  );
}
const carouselStyle = StyleSheet.create({
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

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
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
});
