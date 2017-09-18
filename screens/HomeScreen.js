import React from 'react';
import {
  View,
  Button,StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container }>
        <Button
          title = "Day 1" 
          onPress = { () => {
            navigate('Color');
          }}
        />
        <Button
          title = "Day 2" 
          onPress = { () => {
            navigate('Card');
          }}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
  }
});
