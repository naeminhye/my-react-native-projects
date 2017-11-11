import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CityPicker from './screens/CityPicker';
import ColorScreen from './screens/ColorScreen';
import FontScreen from './screens/FontScreen';
import ClockScreen from './screens/ClockScreen';
import HeartScreen from './screens/HeartScreen';
import AnimatedScreen from './screens/AnimatedScreen';
import CalculationScreen from './screens/CalculationScreen';
import TODOScreen from './screens/TODOScreen';
import SwipeableScreen from './screens/SwipeableScreen';
import SuperGrid from './screens/SuperGrid';
import GridToDoList from './screens/GridToDoList';
import TestCoords from './screens/TestCoords';
import DemoWeather from './DemoWeather';
import Weather from './SimpleWeather/Weather';
import SearchScreen from './screens/SearchScreen';
import KittenDemo from './screens/KittenDemo';
import InputKitten from './screens/InputKitten';

import { StackNavigator } from 'react-navigation';

const MyFirstApp = StackNavigator({
  Home: { screen: HomeScreen },
  CityPicker: { screen: CityPicker},
  Color: { screen: ColorScreen },
  Font: { screen: FontScreen},
  Clock: { screen: ClockScreen },
  Heart: { screen: HeartScreen },
  Animation: { screen: AnimatedScreen },
  Calculation: { screen: CalculationScreen },
  TODO: { screen: TODOScreen },
  Swipeable: { screen: SwipeableScreen },
  Grid: { screen: SuperGrid },
  Demo: { screen: GridToDoList },
  TestCoords: { screen: TestCoords },
  DemoWeather: { screen: DemoWeather },
  Weather : { screen: Weather },
  SearchScreen: {screen: SearchScreen},
  Kitten: {screen: KittenDemo},
  Input: {screen: InputKitten},
});

export default MyFirstApp;
