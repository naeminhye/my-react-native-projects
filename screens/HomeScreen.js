import React from 'react';
import {
  View,
  //Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GridView from 'react-native-super-grid';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;

    const items = [
      { name: 'Random Color', code: '#1abc9c', navigator: 'Color' }, 
      { name: 'CityPicker', code: '#e74c3c', navigator: 'CityPicker' },
	  { name: 'Custom Fonts', code: '#2ecc71', navigator: 'Font' },
      { name: 'Digital Clock', code: '#3498db', navigator: 'Clock' }, 
	  { name: 'Tap to love', code: '#9b59b6', navigator: 'Heart' },
      { name: 'Animation', code: '#34495e', navigator: 'Animation' }, 
	  { name: 'Calculator', code: '#16a085', navigator: 'Calculation' },
      { name: 'TODO List', code: '#27ae60', navigator: 'TODO' }, 
	  { name: 'Swipeable List', code: '#2980b9', navigator: 'Swipeable' },
      { name: 'Grid View', code: '#8e44ad', navigator: 'Grid' }, 
	  { name: 'Demo Grid TODO List', code: '#2c3e50', navigator: 'Demo' },
      { name: 'TestCoords', code: '#f1c40f', navigator: 'TestCoords' }, 
	  { name: 'DemoWeather', code: '#e67e22', navigator: 'DemoWeather' },
	  { name: 'Weather', code: '#e74c3c', navigator: 'Weather' },
	  { name: 'SearchScreen', code: '#e74c3c', navigator: 'SearchScreen' },
	  { name: 'Kitten', code: '#e74c3c', navigator: 'Kitten' },
	  { name: 'Input', code: '#e74c3c', navigator: 'Input' },
    ];
return (
        
<GridView
        itemWidth={130}
        items={items}
        style={styles.gridView}
        renderItem={item => (
			<TouchableOpacity 
				style={[styles.itemContainer, { backgroundColor: item.code }]}
				onPress = { () => {
					navigate(item.navigator);
				}}>
				<Text style={styles.itemName}>{item.name}</Text>
				<Text style={styles.itemCode}>{item.code}</Text>
			</TouchableOpacity>
        )}
/>
    );
  }

}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 200,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  
});
