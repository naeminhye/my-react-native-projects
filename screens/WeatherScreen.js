import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeatherView from './WeatherView';

let BG_HOT  = "#fb9f4d",
    BG_WARM = "#fbd84d",
    BG_COLD = "#00abe6";
const REQUEST_URL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&",
    APIKEY = '82b3237b6c2169c9bc02bf958315845d';

export default class WeatherScreen extends React.Component {
    getInitialState() {
        return { 
            weatherData: null,
            backgroundColor: "#FFFFFF"
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            location => {
                let formattedURL = REQUEST_URL + APIKEY;

                console.log(formattedURL);

                this.fetchData(formattedURL);
            }
        )
    }

    fetchData(url) {
        fetch(url)
                .then((response) => response.json())
                .then((responseData) => {
                    let bg,
                        temp = parseInt(responseData.main.temp);
                    if(temp < 14) {
                      bg = BG_COLD;
                    } else if(temp >= 14 && temp < 25) {
                      bg = BG_WARM;
                    } else if(temp >= 25) {
                      bg = BG_HOT;
                    }

                    this.setState({
                        weatherData: responseData,
                        backgroundColor: bg
                    });

                }).done();
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingText}>
                    Loading Weather Information
                </Text>
            </View>
        );
    }

    render() {
        if(!this.state.weatherData) {
            return this.renderLoadingView();
        }

        let city = this.state.weatherData.name.toUpperCase();
        let country = this.state.weatherData.sys.country.toUpperCase();
        let temp = parseInt(this.state.weatherData.main.temp).toFixed(0);
        let weather = this.state.weatherData.weather[0].icon.toString();
        
        return (

            <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
                <WeatherView
                        weather={weather}
                        temperature={temp}
                        city={city}
                        country={country} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});