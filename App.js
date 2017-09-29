import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ColorScreen from './screens/ColorScreen';
import CardScreen from './screens/CardScreen';
import ClockScreen from './screens/ClockScreen';
import HeartScreen from './screens/HeartScreen';
import AnimatedScreen from './screens/AnimatedScreen';
import CalculationScreen from './screens/CalculationScreen';
// import TODOScreen from './screens/TODOScreen';
// import WeatherScreen from './screens/WeatherScreen';

import { StackNavigator } from 'react-navigation';

const MyFirstApp = StackNavigator({
  Home: { screen: HomeScreen },
  Color: { screen: ColorScreen },
  Card: { screen: CardScreen},
  Clock: { screen: ClockScreen },
  Heart: { screen: HeartScreen },
  Animation: { screen: AnimatedScreen },
  Calculation: { screen: CalculationScreen },
  // TODO: { screen: TODOScreen },
  // Weather : { screen: WeatherScreen},
});

export default MyFirstApp;
