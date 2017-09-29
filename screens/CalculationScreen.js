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
    constructor(props) {
        super(props);
        
        this.initialState = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }

        this.state = this.initialState;
    }

    _renderInputButtons() {
        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                let btnColor = '', btnFlex = 1;
                if (columnIdx == row.length - 1)
                    btnColor = '#FF9500'
                else if (row == 0)
                    btnColor = '#A6A6A6';
                else btnColor = '#323232';
                if(buttonVal == 0)
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

        // let views = [];
        // for (var r = 0; r < inputButtons.length; r ++) {
        //     let row = inputButtons[r];
        //     let inputRow = [];
        //     for (var i = 0; i < row.length; i ++) {
        //         let input = row[i], btnColor = '', btnFlex = 1;
        //         if (i == row.length - 1)
        //             btnColor = '#FF9500'
        //         else if (r == 0)
        //             btnColor = '#A6A6A6';
        //         else btnColor = '#323232';
        //         if(input == 0)
        //             btnFlex = 2;
        //         inputRow.push(
        //             <InputButton
        //                 value={input}
        //                 color={btnColor}
        //                 flexValue={btnFlex}
        //                 highlight={this.state.selectedSymbol === input}
        //                 onPress={this._onInputButtonPressed.bind(this, input)}
        //                 key={r + "-" + i}/>
        //         );
        //     }
        //     views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
        // }
        // return views;
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
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue,
        });
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0,
                });
                break;
            case '+/-':
                this.setState({
                    selectedSymbol: null,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0 - this.state.inputValue,
                });
                break;
            case '%':
                break;
            case '.':
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                inputValue = this.state.inputValue,
                previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
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
                    <Text style={styles.displayText}>{this.state.inputValue}</Text>
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
        flex: 2,
        backgroundColor: '#000',
        justifyContent: 'flex-end'
    },
    displayText: {
        color: 'white',
        fontSize: 80,
        textAlign: 'right',
        padding: 20
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#000',
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});