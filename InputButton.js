import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class InputButton extends React.Component {
    
    render() {
        return (
            <TouchableHighlight style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null, {backgroundColor: this.props.color, flex: this.props.flexValue}]}
                                underlayColor='#FFFE'
                                onPress={this.props.onPress}>
                <Text style={styles.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
            // <TouchableHighlight style={[styles.inputButton, {backgroundColor: this.props.color, flex: this.props.flexValue}]}
            //                     onPress={this.props.onPress}>
            //     <Text style={styles.inputButtonText}>{this.props.value}</Text>
            // </TouchableHighlight>
        );
    }
    
}

var styles = StyleSheet.create({
    inputButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 50,
        borderColor: '#000',
    },
    inputButtonText: {
        fontSize: 30,
        color: 'white'
    }
});