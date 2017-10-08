import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height 
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class DemoWeather extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            initialPosition: {
                latitude : 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            markerPosition: {
                latitude : 0,
                longitude: 0,
            }
        }
    }

    watchID: ?number = null
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var lon = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude : lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }

            this.setState({
                initialPosition: initialRegion,
                markerPosition: initialRegion
            })
        }, (error) => alert(JSON.stringify(error)), {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        })

        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var lon = parseFloat(position.coords.longitude)

            var lastRegion = {
                latitude : lat,
                longitude: lon,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }

            this.setState({
                initialPosition: lastRegion,
                markerPosition: lastRegion
            })
        })
    }

    componentWillMount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 24 }}>lat: {this.state.initialPosition.latitude}</Text>
                    <Text style={{ fontSize: 24 }}>lon: {this.state.initialPosition.longitude}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <MapView
                        style={styles.map} 
                        initialRegion={this.state.initialPosition}>
                        <MapView.Marker
                            coordinate={this.state.markerPosition}>
                            <View style={styles.radius}>
                                <View style={styles.marker}/>
                            </View>
                        </MapView.Marker>
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        position: 'absolute',
    },
    radius: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow:'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 112, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    marker: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'white',
        overflow:'hidden',
        backgroundColor: '#007AFF',
    },
});