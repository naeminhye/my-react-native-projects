import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

class Task extends React.Component {
    checkTask() {
        this.props.dispatch({
            type: 'TOGGLE_DONE',
            id: this.props.task.id,
        });
    }

    render() {
        const { name, done } = this.props.task;
        return (
            <View style={styles.container}>
                <CheckBox
                    title={name}
                    checked={done}
                    onPress={this.checkTask.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue', 
        justifyContent: 'center',
        padding: 10,
        margin: 10,
    },
});

export default connect()(Task);