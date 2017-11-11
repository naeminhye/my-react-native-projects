import React, { Component } from 'react';
import {
  Animated,
  Button,
  Platform,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchLayout from 'react-navigation-addon-search-layout'; 

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
            <SearchLayout
              searchInputUnderlineColorAndroid="#fff"
              renderResults={q => <Text>{q}</Text>}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: '#ecf0f1',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
