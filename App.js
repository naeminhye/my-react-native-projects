import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ColorScreen from './screens/ColorScreen';

import { StackNavigator } from 'react-navigation';

const MyFirstApp = StackNavigator({
  Home: { screen: HomeScreen },
  Color: { screen: ColorScreen },
});

export default MyFirstApp;
