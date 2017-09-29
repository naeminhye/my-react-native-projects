import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import InputButton from '../InputButton';

const inputButtons = [
    ['AC', '+/-', '%', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '=']
];

export default class CalculationScreen extends React.Component {

    static navigationOptions = {
        header: null
      }

    constructor(props) {
        super(props);
        
        this.initialState = {
            previousValue: 0,
            // inputValue: 0, // doi ten thanh currentValue
            currentValue: 0,
            display: 0,
            selectedSymbol: null
        }

        this.state = this.initialState;
    }

    _renderInputButtons() {
        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                let btnColor = '', btnFlex = 1;
                if (columnIdx === row.length - 1)
                    btnColor = '#FF9500'
                else if (idx === 0)
                    btnColor = '#A6A6A6';
                else btnColor = '#323232';
                if(buttonVal === 0)
                    btnFlex = 2;
                return <InputButton
                            value={buttonVal}
                            color={btnColor}
                            flexValue={btnFlex}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={this._onInputButtonPressed.bind(this, buttonVal)}
                            key={'butt-' + columnIdx} />;
            });

            return <View style={styles.inputRow} key={'row-' + idx}>{inputRow}</View>;
        });

        return views;
    }    

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            default:
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(num) {
        let currentValue = (this.state.currentValue * 10) + num,
            display = (this.state.selectedSymbol === '.') ? eval(this.state.display + num) : ((this.state.currentValue * 10) + num);

        this.setState({
            currentValue: currentValue,
            display: display,
        });
    }

    _handleStringInput(str) {
        let value = this.state.currentValue,
            previous = this.state.previousValue,
            display = this.state.display,
            percentedValue = this.state.currentValue / 100,
            signChangedValue = 0 - this.state.currentValue,
            dottedValue = this.state.currentValue + '.';
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousValue: value,
                    currentValue: 0,
                    display: value,
                });
                break;
            case '+/-':
                this.setState({
                    selectedSymbol: null,
                    previousValue: value,
                    currentValue: signChangedValue,
                    display: signChangedValue,
                });
                break;
            case '%':
                this.setState({
                    selectedSymbol: null,
                    previousValue: value,
                    currentValue: percentedValue,
                    display: percentedValue,
                });
                break;
            case '.':
                if(display.toString().includes(".")) {
                    break;
                }
                this.setState({
                    selectedSymbol: str,
                    previousValue: value,
                    currentValue: 0,
                    display: dottedValue,
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                result = eval(previous + symbol + value);

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousValue: 0,
                    currentValue: result,
                    display: result,
                    selectedSymbol: null
                });
                break;
            case 'AC':
                this.setState(this.initialState);
                    break;
        }
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.displayContainer}>
                    <Text style={styles.displayText}>{this.state.display}</Text>
                </View>
                <View style={styles.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    displayContainer: {
        flex: 3,
        backgroundColor: '#000',
        justifyContent: 'flex-end'
    },
    displayText: {
        color: 'white',
        fontSize: 100,
        textAlign: 'right',
        padding: 20
    },
    inputContainer: {
        flex: 7,
        backgroundColor: '#000',
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});