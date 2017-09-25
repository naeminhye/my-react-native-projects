import React from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Easing,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

export default class AnimatedScreen extends React.Component {

    constructor(props) {
        super(props);

        this._onPressIn = this._onPressIn.bind(this);
        this._onPressOut = this._onPressOut.bind(this);
    }

    _onPressIn() {
        Animated.spring(this.springValue, {
            toValue: .5,
        }).start()
    }

    _onPressOut() {
        Animated.spring(this.springValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }

    componentWillMount() {
        this.opacityValue = new Animated.Value(1);
        this.heightValue = new Animated.Value(100);
        this.springValue = new Animated.Value(1);
    }

    componentDidMount() {
        Animated.timing(this.opacityValue, {
            toValue: .2,
            duration: 3000,
            easing: Easing.bounce
        }).start()
    }

    render() {
        const animatedStyle = { 
            opacity: this.opacityValue, 
            height: this.heightValue,
        }
        const buttonStyle = {
            transform: [{ scale: this.springValue }] 
        }
        return(
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
                <TouchableWithoutFeedback
                    onPressIn = {this._onPressIn}
                    onPressOut = {this._onPressOut} >
                    <Animated.View style={[styles.button, buttonStyle]}>
                        <Text style={styles.text}>Press me!</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
                
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
    box: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    button: {
        backgroundColor: 'yellow',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
    },
});