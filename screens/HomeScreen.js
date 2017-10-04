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
        <Button
          title = "Custom Fonts" 
          onPress = { () => {
            navigate('Font');
          }}
        />
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
        <Button
          title = "TODO List" 
          onPress = { () => {
            navigate('TODO');
          }}
        />
        <Button
          title = "Swipeable List" 
          onPress = { () => {
            navigate('Swipeable');
          }}
        />
        <Button
          title = "Grid View" 
          onPress = { () => {
            navigate('Grid');
          }}
        />
        <Button
          title = "Demo Grid TODO List" 
          onPress = { () => {
            navigate('Demo');
          }}
        />
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
