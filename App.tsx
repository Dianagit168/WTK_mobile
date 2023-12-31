/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './View/Screen/mainscreen';
import HomeScreen from './View/Screen/home_screen';
import LibraryScreen from './View/Screen/library_screen';
import VideoScreen from './View/Screen/video_screen';
import ContentScreen from './View/Screen/contents_screen';
import DetailVideoScreen from './View/Screen/detail_videos_screen';
import DetailBook from './View/Screen/detail_book';
import ReadTheBook from './View/Screen/read_the_book';
import ReadKaset from './View/Screen/read_kaset';
import ReadEx from './View/Screen/read_ex';

import CollapsibleExample from './View/Screen/read_ex';
import GridView from './View/components/grid_view';
import DemoAppbar from './View/Screen/appbardemo';
import DemoAppBar from './View/Screen/appbardemo';
import ProfileHome from './View/Screen/profile_home';
import ProfileOwned from './View/Screen/profile_owned';
import ProfileFollowing from './View/Screen/profile_following';
import ProfileEenrollment from './View/Screen/profile_enrollment';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}></Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <ProfileEenrollment />;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
