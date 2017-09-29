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
          title = "Random Color" 
          onPress = { () => {
            navigate('Color');
          }}
        />
        {/* <Button
          title = "Day 2" 
          onPress = { () => {
            navigate('Card');
          }}
        /> */}
        <Button
          title = "Digital Clock" 
          onPress = { () => {
            navigate('Clock');
          }}
        />
        <Button
          title = "Tap to love" 
          onPress = { () => {
            navigate('Heart');
          }}
        />
        <Button
          title = "Animation" 
          onPress = { () => {
            navigate('Animation');
          }}
        />
        <Button
          title = "Calculator" 
          onPress = { () => {
            navigate('Calculation');
          }}
        />
        {/* <Button
          title = "Day 6" 
          onPress = { () => {
            navigate('TODO');
          }}
        /> */}
        {/* <Button
          title = "Day 4" 
          onPress = { () => {
            navigate('Weather');
          }}
        /> */}
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
