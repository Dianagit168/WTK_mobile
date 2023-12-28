import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Screen2 from '../Screen/screen2';
import ProfileHome from '../Screen/profile_home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function TopTapBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProfileHome"
        component={ProfileHome}
        options={{
          tabBarLabel: 'ProfileHome',
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{tabBarLabel: 'Screen2'}}
      />
    </Tab.Navigator>
  );
}

export default function TopTapBarNav() {
  return (
    <NavigationContainer>
      <TopTapBar />
    </NavigationContainer>
  );
}
