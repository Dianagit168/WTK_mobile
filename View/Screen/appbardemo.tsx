// Import necessary React Native components and React Navigation
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Create a functional component for the header bar
const HeaderBar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My App Header</Text>
    </View>
  );
};

// Create a functional component for the bottom navigation bar
const BottomNavBar = () => {
  return (
    <View style={styles.bottomNav}>
      <Text style={styles.bottomNavText}>Tab 1</Text>
      <Text style={styles.bottomNavText}>Tab 2</Text>
      <Text style={styles.bottomNavText}>Tab 3</Text>
    </View>
  );
};

// Create individual screens for each stack screen
const Screen1 = () => (
  <View style={styles.content}>
    <Text>Screen 1 Content Goes Here</Text>
  </View>
);

const Screen2 = () => (
  <View style={styles.content}>
    <Text>Screen 2 Content Goes Here</Text>
  </View>
);

const Screen3 = () => (
  <View style={styles.content}>
    <Text>Screen 3 Content Goes Here</Text>
  </View>
);

// Create a stack navigator
//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
// Create the main component that combines the header, stack navigator, and bottom navigation
const DemoAppBar = () => {
  return (
    <NavigationContainer>
      <HeaderBar />
      <Tab.Navigator>
        <Tab.Screen
          name="Tab1"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Tab2" component={Screen2} />
        <Tab.Screen name="Tab3" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DemoAppBar;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    height: 60,
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  bottomNavText: {
    color: '#fff',
    fontSize: 16,
  },
});
