import {StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import {Home} from 'lucide-react-native';
import {Library} from 'lucide-react-native';
import {Film} from 'lucide-react-native';
import {Newspaper} from 'lucide-react-native';

import {Menu} from 'lucide-react-native';
import ContentScreen from './contents_screen';
import DetailVideoScreen from './detail_videos_screen';
import HomeScreen from './home_screen';
import LibraryScreen from './library_screen';
import VideoScreen from './video_screen';
import DetailBook from './detail_book';
import MenuScreen from './menu_screen';

const Tab = createBottomTabNavigator();
// type TabBarOptions = {
//   tabBarShowLabel: boolean;
//   headerShown: boolean;
//   tabBarStyle: {
//     position: 'absolute';
//     bottom: number;
//     right: number;
//     left: number;
//     elevation: number;
//     height: number;
//   };
// };

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({}) => {
              return <Home color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({}) => {
              return <Library color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Video"
          component={VideoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({}) => {
              return <Film color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Contents"
          component={ContentScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({}) => {
              return <Newspaper color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({}) => {
              return <Menu color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
