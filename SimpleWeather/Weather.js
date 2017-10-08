import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/SimpleLineIcons'; 
import Icon from 'react-native-vector-icons/Ionicons';

//const locationIcon = <Icon name="location-pin" size={35} color="white" />; //
const loIcon = <Icon name="ios-pin-outline" size={35} color="white" />; 
//const weatherIcon = <Icon name="umbrella" size={100} color="white" />;

export default class Weather extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?dpr=1&auto=compress,format&fit=crop&w=1576&h=&q=80&cs=tinysrgb&crop=',
          }}
          style={styles.imageBg}>
          <View style={styles.upperContainer}>
            <View style={styles.locationContainer}>
              <Text style={styles.location}>{loIcon} California</Text>
            </View>
            <View style={styles.centerContainer}>
              <View style={styles.tempContainer}>
                <Text style={styles.temp}>20</Text>
                <Text style={styles.degree}>°</Text>
              </View>
              <Text style={styles.status}>Partly Cloudy</Text>
            </View>
          </View>
        </Image>

        <View style={styles.footer}>
          <View style={styles.daily}>
            <Text style={styles.dailyText}>Monday</Text>
            <Text style={styles.dailyText}>18°</Text>
          </View>
          <View style={styles.daily}>
            <Text style={styles.dailyText}>Tuesday</Text>
            <Text style={styles.dailyText}>21°</Text>
          </View>
          <View style={styles.daily}>
            <Text style={styles.dailyText}>Wednesday</Text>
            <Text style={styles.dailyText}>20°</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  imageBg: {
    flex: 2,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingTop: 20,
  },
  upperContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    fontSize: 100,
  },
  degree: {
    fontSize: 50,
    marginTop: -30,
  },
  status: {
    fontSize: 20,
  },
  locationContainer: {
    height: 20,
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  location: {
    fontSize: 20,
    color: 'white',
  },
  footer: {
    flex: 1,
  },
  daily: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  dailyText: {
    fontSize: 20,
  },
});
