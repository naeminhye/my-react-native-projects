import React from 'react';
import {
    StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import PropTypes from 'prop-types';

const weatherIconArray = [];
weatherIconArray["01n"] = require("../assets/images/weather/weather-clear.png");
weatherIconArray["01d"] = require("../assets/images/weather/weather-clear.png");
weatherIconArray["02n"] = require("../assets/images/weather/weather-fewclouds.png");
weatherIconArray["02d"] = require("../assets/images/weather/weather-fewclouds.png");
weatherIconArray["03n"] = require("../assets/images/weather/weather-scatteredcloud.png");
weatherIconArray["03d"] = require("../assets/images/weather/weather-scatteredcloud.png");
weatherIconArray["04n"] = require("../assets/images/weather/weather-brokenclouds.png");
weatherIconArray["04d"] = require("../assets/images/weather/weather-brokenclouds.png");
weatherIconArray["09n"] = require("../assets/images/weather/weather-drizzle.png");
weatherIconArray["09d"] = require("../assets/images/weather/weather-drizzle.png");
weatherIconArray["10n"] = require("../assets/images/weather/weather-rain.png");
weatherIconArray["10d"] = require("../assets/images/weather/weather-rain.png");
weatherIconArray["11n"] = require("../assets/images/weather/weather-thunderstorm.png");
weatherIconArray["11d"] = require("../assets/images/weather/weather-thunderstorm.png");
weatherIconArray["13n"] = require("../assets/images/weather/weather-snow.png");
weatherIconArray["13d"] = require("../assets/images/weather/weather-snow.png");
weatherIconArray["50n"] = require("../assets/images/weather/weather-mist.png");
weatherIconArray["50d"] = require("../assets/images/weather/weather-mist.png");

export default class WeatherView extends React.Component {

    render() {
        return (
			<View style={styles.centreContainer}>
				<Image source={weatherIconArray[this.props.weather]} style={styles.weatherIcon} />
				<Text style={styles.weatherText}>{this.props.temperature}&deg;</Text>
				<Text style={styles.weatherTextLight}>{this.props.city},</Text>
				<Text style={styles.weatherTextLight}>{this.props.country}</Text>
            </View>
        );
    }
}

WeatherView.propTypes = {
    weather: React.PropTypes.string,
    temperature: React.PropTypes.int,
    city: React.PropTypes.string,
    country: React.PropTypes.string
}

const styles = StyleSheet.create({
	centreContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
	weatherIcon: {
    width: 132,
    height: 132,
  },
  weatherText: {
    fontSize: 62,
    fontWeight: "bold",
    color: "#FFFFFF",
		textAlign: "center"
  },
  weatherTextLight: {
    fontSize: 32,
    fontWeight: "100",
    color: "#FFFFFF",
		textAlign: "center"
  }
});