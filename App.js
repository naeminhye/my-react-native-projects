import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ColorScreen from './screens/ColorScreen';
import CardScreen from './screens/CardScreen';
import ClockScreen from './screens/ClockScreen';
// import WeatherScreen from './screens/WeatherScreen';

import { StackNavigator } from 'react-navigation';

const MyFirstApp = StackNavigator({
  Home: { screen: HomeScreen },
  Color: { screen: ColorScreen },
  Card: { screen: CardScreen},
  Clock: { screen: ClockScreen },
  // Weather : { screen: WeatherScreen},
});

export default MyFirstApp;
