import React from 'react';
import { 
    View,
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    addNewTask() {
        const { name } = this.state;
        this.props.dispatch({
            type: 'ADD_NEW_TASK',
            name,
        });
        this.props.dispatch({
            type: 'TOGGLE_ADDING',
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput}
                    value={this.state.name}
                    onChange={text => this.setState({name: text})}
                    placeholder="Add a new task"
                />
                <TouchableOpacity
                    onPress={this.addNewTask.bind(this)}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'yellow', 
        alignSelf: 'stretch', 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textInput: {
        height: 50,
        width: 300,
        backgroundColor: '#E4F6D4',
        paddingHorizontal: 10,
        margin: 10,

    },
});

export default connect()(Form);