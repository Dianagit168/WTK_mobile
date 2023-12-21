import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import brandingColor from '../components/branding_color';
import BoldText from '../components/bold_text';
import SemiBoldText from '../components/semi_bold_text';
import {ThumbsUp, ThumbsDown, ChevronLeft, Search} from 'lucide-react-native';
import ChannelOrg from '../components/channel_org';
import NormalText from '../components/normal_text';

const headerTaimnailHight = 220;

const TheContent = () => (
  <View
    style={{
      width: 130,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <BoldText
      contentT={'“បើអ្នកអស់ចិត្ត”'}
      colorT={brandingColor.blueBlack100}
      backColorI={''}
      fontSizeT={18}
      paddingVer={0}
      paddingHor={0}
    />
  </View>
);

const BodySection = () => {
  return (
    <View style={{marginHorizontal: 10, paddingVertical: 20}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          marginTop: 10,
        }}>
        <TheContent />
      </View>
      <ChannelOrg
        logo={'KOOMPI'}
        name={'Koompi Official'}
        subTit={'3K subscibe'}
        nameCol={brandingColor.blueBlack100}
      />
      <NormalText
        contentT="បើអ្នកអស់ចិត្តហើយ ហេតុអ្វីមិនដោះលែងឱ្យមានសេរីភាព ចាំបាច់អីមានអ្នកទីបីលួចលាក់ពីក្រោយខ្នង? វាឆ្ងាញ់ វាឡូវណាស់មែនទេ ដែលមានអ្នកលួចលាក់បែបនេះ? បើសេចក្តីស្នេហាមានតែការឈ្លោះប្រកែកគ្នា មិនដែលយល់ចិត្តគ្នាបែបនេះ មានតែការកុហក មិនស្មោះត្រង់ សូមដោះលែងគ្នាទៅ វាប្រសើរជាង។

              ខ្ញុំធ្លាប់គិតថា បើអត់ពីអ្នកទៅ តើខ្ញុំរស់ម្តេចទៅ? ប៉ុន្តែពេលនេះ មានអ្នក ខ្ញុំមានតែការឈឺចាប់។ ខ្ញុំសុខចិត្តរស់ម្នាក់ឯង ប្រសើរជាងរស់ជាមួយមនុស្សដែលមិនមានសេចក្តីស្មោះត្រង់មកឱ្យខ្ញុំ។ ចិត្តអ្នកមិនចេះស្កប់ស្រាប់ ដូច្នេះមានតែទៅរកអ្នកដែលមានចិត្តស្រដៀងនឹងអ្នកទេទើបស័ក្តិសម។ បើអ្នកអស់ចិត្តហើយ ហេតុអ្វីមិនដោះលែងឱ្យមានសេរីភាព ចាំបាច់អីមានអ្នកទីបីលួចលាក់ពីក្រោយខ្នង? វាឆ្ងាញ់ វាឡូវណាស់មែនទេ ដែលមានអ្នកលួចលាក់បែបនេះ? បើសេចក្តីស្នេហាមានតែការឈ្លោះប្រកែកគ្នា មិនដែលយល់ចិត្តគ្នាបែបនេះ មានតែការកុហក មិនស្មោះត្រង់ សូមដោះលែងគ្នាទៅ វាប្រសើរជាង។

              ខ្ញុំធ្លាប់គិតថា បើអត់ពីអ្នកទៅ តើខ្ញុំរស់ម្តេចទៅ? ប៉ុន្តែពេលនេះ មានអ្នក ខ្ញុំមានតែការឈឺចាប់។ ខ្ញុំសុខចិត្តរស់ម្នាក់ឯង ប្រសើរជាងរស់ជាមួយមនុស្សដែលមិនមានសេចក្តីស្មោះត្រង់មកឱ្យខ្ញុំ។ ចិត្តអ្នកមិនចេះស្កប់ស្រាប់ ដូច្នេះមានតែទៅរកអ្នកដែលមានចិត្តស្រដៀងនឹងអ្នកទេទើបស័ក្តិសម។បើអ្នកអស់ចិត្តហើយ ហេតុអ្វីមិនដោះលែងឱ្យមានសេរីភាព ចាំបាច់អីមានអ្នកទីបីលួចលាក់ពីក្រោយខ្នង? វាឆ្ងាញ់ វាឡូវណាស់មែនទេ ដែលមានអ្នកលួចលាក់បែបនេះ? បើសេចក្តីស្នេហាមានតែការឈ្លោះប្រកែកគ្នា មិនដែលយល់ចិត្តគ្នាបែបនេះ មានតែការកុហក មិនស្មោះត្រង់ សូមដោះលែងគ្នាទៅ វាប្រសើរជាង។

              ខ្ញុំធ្លាប់គិតថា បើអត់ពីអ្នកទៅ តើខ្ញុំរស់ម្តេចទៅ? ប៉ុន្តែពេលនេះ មានអ្នក ខ្ញុំមានតែការឈឺចាប់។ ខ្ញុំសុខចិត្តរស់ម្នាក់ឯង ប្រសើរជាងរស់ជាមួយមនុស្សដែលមិនមានសេចក្តីស្មោះត្រង់មកឱ្យខ្ញុំ។ ចិត្តអ្នកមិនចេះស្កប់ស្រាប់ ដូច្នេះមានតែទៅរកអ្នកដែលមានចិត្តស្រដៀងនឹងអ្នកទេទើបស័ក្តិសម។"
        colorT={brandingColor.blueBlack100}
        backColorI={''}
        fontSizeT={13}
        paddingVer={15}
        paddingHor={10}
        numberOfLines={0}
      />
      <NormalText
        contentT="បើអ្នកអស់ចិត្តហើយ ហេតុអ្វីមិនដោះលែងឱ្យមានសេរីភាព ចាំបាច់អីមានអ្នកទីបីលួចលាក់ពីក្រោយខ្នង? វាឆ្ងាញ់ វាឡូវណាស់មែនទេ ដែលមានអ្នកលួចលាក់បែបនេះ? បើសេចក្តីស្នេហាមានតែការឈ្លោះប្រកែកគ្នា មិនដែលយល់ចិត្តគ្នាបែបនេះ មានតែការកុហក មិនស្មោះត្រង់ សូមដោះលែងគ្នាទៅ វាប្រសើរជាង។

              ខ្ញុំធ្លាប់គិតថា បើអត់ពីអ្នកទៅ តើខ្ញុំរស់ម្តេចទៅ? ប៉ុន្តែពេលនេះ មានអ្នក ខ្ញុំមានតែការឈឺចាប់។ ខ្ញុំសុខចិត្តរស់ម្នាក់ឯង ប្រសើរជាងរស់ជាមួយមនុស្សដែលមិនមានសេចក្តីស្មោះត្រង់មកឱ្យខ្ញុំ។ ចិត្តអ្នកមិនចេះស្កប់ស្រាប់ ដូច្នេះមានតែទៅរកអ្នកដែលមានចិត្តស្រដៀងនឹងអ្នកទេទើបស័ក្តិសម។ បើអ្នកអស់ចិត្តហើយ ហេតុអ្វីមិនដោះលែងឱ្យមានសេរីភាព ចាំបាច់អីមានអ្នកទីបីលួចលាក់ពីក្រោយខ្នង? វាឆ្ងាញ់ វាឡូវណាស់មែនទេ ដែលមានអ្នកលួចលាក់បែបនេះ? បើសេចក្តីស្នេហាមានតែការឈ្លោះប្រកែកគ្នា មិនដែលយល់ចិត្តគ្នាបែបនេះ មានតែការកុហក មិនស្មោះត្រង់ សូមដោះលែងគ្នាទៅ វាប្រសើរជាង។

              ខ្ញុំធ្លាប់គិតថា បើអត់ពីអ្នកទៅ តើខ្ញុំរស់ម្តេចទៅ? ប៉ុន្តែពេលនេះ មានអ្នក ខ្ញុំមានតែការឈឺចាប់។ ខ្ញុំសុខចិត្តរស់ម្នាក់ឯង ប្រសើរជាងរស់ជាមួយមនុស្សដែលមិនមានសេចក្តីស្មោះត្រង់មកឱ្យខ្ញុំ។ ចិត្តអ្នកមិនចេះស្កប់ស្រាប់ ដូច្នេះមានតែទៅរកអ្នកដែលមានចិត្តស្រដៀងនឹងអ្នកទេទើបស័ក្តិសម។បើអ្នកអស់ចិត្តហើយ ហេតុអ្វីមិនដោះលែងឱ្យមានសេរីភាព ចាំបាច់អីមានអ្នកទីបីលួចលាក់ពីក្រោយខ្នង? វាឆ្ងាញ់ វាឡូវណាស់មែនទេ ដែលមានអ្នកលួចលាក់បែបនេះ? បើសេចក្តីស្នេហាមានតែការឈ្លោះប្រកែកគ្នា មិនដែលយល់ចិត្តគ្នាបែបនេះ មានតែការកុហក មិនស្មោះត្រង់ សូមដោះលែងគ្នាទៅ វាប្រសើរជាង។

              ខ្ញុំធ្លាប់គិតថា បើអត់ពីអ្នកទៅ តើខ្ញុំរស់ម្តេចទៅ? ប៉ុន្តែពេលនេះ មានអ្នក ខ្ញុំមានតែការឈឺចាប់។ ខ្ញុំសុខចិត្តរស់ម្នាក់ឯង ប្រសើរជាងរស់ជាមួយមនុស្សដែលមិនមានសេចក្តីស្មោះត្រង់មកឱ្យខ្ញុំ។ ចិត្តអ្នកមិនចេះស្កប់ស្រាប់ ដូច្នេះមានតែទៅរកអ្នកដែលមានចិត្តស្រដៀងនឹងអ្នកទេទើបស័ក្តិសម។"
        colorT={brandingColor.blueBlack100}
        backColorI={''}
        fontSizeT={13}
        paddingVer={15}
        paddingHor={10}
        numberOfLines={0}
      />
      <View
        style={{
          height: 70,
          backgroundColor: brandingColor.blueBlack3,
          marginHorizontal: 10,
          borderRadius: 10,
          padding: 10,
          justifyContent: 'space-evenly',
        }}>
        <SemiBoldText
          contentT={'Do you think the article is useful?'}
          colorT={brandingColor.blueBlack100}
          fontSizeT={14}
        />
        <View
          style={{
            flexDirection: 'row',

            width: '17%',
            justifyContent: 'space-between',
            alignSelf: 'flex-end',
          }}>
          <ThumbsUp
            color={brandingColor.blueBlack60}
            size={20}
            strokeWidth={2}
          />
          <ThumbsDown
            color={brandingColor.blueBlack60}
            size={20}
            strokeWidth={2}
          />
        </View>
      </View>
    </View>
  );
};

export default function ReadKaset() {
  const scrollY = new Animated.Value(0);
  const stickyTop = scrollY.interpolate({
    outputRange: [-150, 0],
    inputRange: [headerTaimnailHight, headerTaimnailHight + 150],
    extrapolate: 'clamp',
  });
  const stickyOpacity = scrollY.interpolate({
    outputRange: [0, 1],
    inputRange: [headerTaimnailHight, headerTaimnailHight + 10],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <View style={styles.headerSection}>
          <Image
            source={{
              uri: 'https://api.weteka.org/public/orgs/64dc811d25ce5ca36d40c64e/images/1465803e-96d8-461c-9526-d4f93779550a.jpg',
            }}
            style={{height: 220, width: '100%', resizeMode: 'stretch'}}
          />
        </View>
        <BodySection />
      </ScrollView>
      <Animated.View
        style={[
          styles.animatedView,
          {
            top: stickyTop,
            opacity: stickyOpacity,
          },
        ]}>
        <ChevronLeft
          color={brandingColor.blueBlack100}
          size={30}
          strokeWidth={2}
        />
        {TheContent()}

        <Search color={brandingColor.blueBlack100} size={30} strokeWidth={2} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedView: {
    flexDirection: 'row',
    height: 80,
    // paddingBottom: 16,
    backgroundColor: brandingColor.blue3,
    justifyContent: 'space-between',

    alignItems: 'center',
    position: 'absolute',
    //  top: -150, // -150 -> 0
    left: 0,
    right: 0,
    opacity: 1,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 16,
        shadowOffset: {
          width: 4,
          height: 3,
        },
      },
    }),
  },
  headerSection: {
    height: headerTaimnailHight,
    justifyContent: 'flex-end',
  },

  item: {
    backgroundColor: '#4F4557',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  itemText: {textAlign: 'center'},
});
