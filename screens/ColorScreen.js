import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Button
} from 'react-native-elements'

export default class ColorScreen extends React.Component {
  static navigationOptions = {
    title: 'Color',
  };
  
  constructor(props) {
	  super(props);
	  
	  this.state = {
		  colorhex: this.getRandomColor(),
	  }
  } 
  
  getRandomColor() {
    // creating a random number between 0 and 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // going from decimal to hex
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
      hexR = '0' + hexR;
    }

    if (hexG.length == 1) {
      hexG = '0' + hexG;
    }

    if (hexB.length == 1) {
      hexB = '0' + hexB;
    }

    // creating the hex value by concatenatening the string values
    var hexColor = '#' + hexR + hexG + hexB;

    return hexColor.toUpperCase();
  }
  
  render() {  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: `${this.state.colorhex}`,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          large
          buttonStyle={{backgroundColor: '#f2f2f2', borderRadius: 0}}
          textStyle={{textAlign: 'center', fontSize: 20, color: '#5b5b5b'}}
          title={`${this.state.colorhex}`}
          onPress={() => {
            this.setState({
              colorhex: this.getRandomColor()
            });
          }}
        />
      </View>
	);   
  }    
}
