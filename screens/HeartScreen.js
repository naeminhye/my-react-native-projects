import React from 'react';
import {
    View,
    StyleSheet, 
    Image,
    Text,
    TouchableHighlight,
} from 'react-native';

const heartIcon = require('../assets/images/plain-heart.png');

export default class HeartScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: false,
        };
    }

    _onPressBtn = () => {
        this.setState({
            liked: !this.state.liked,
        });
    }

    render() {
        const likedStyles = this.state.liked ? styles.liked : null;

        return(
            <View style={styles.container}>
                <TouchableHighlight 
                    style={styles.btn} 
                    underlayColor="#ececec"
                    onPress={this._onPressBtn}> 
                    <Image source={heartIcon} style={[styles.icon, likedStyles]} />
                </TouchableHighlight>
                <Text style={styles.text}>Do you like me?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ececec',
    },
    btn: {
        padding: 10,
    },
    icon: {
        width: 150,
        height: 150,
        tintColor: '#f1f1f1',
    },
    liked: {
        tintColor: '#e74c3c',
    },
    text: {
        marginTop: 20
    },
});