import React from 'react';
import {
    FlatList,
    View,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Task from './Task';
import Filter from './Filter';
import Form from './Form';
import Header from './Header';

class TODOList extends React.Component {
    getTaskList() {
        const { myFilter, myTasks } = this.props;

        if(myFilter === 'DONE')
            return myTasks.filter(e => e.done);
        if(myFilter === 'UNDONE')
                return myTasks.filter(e => !e.done);
        return myTasks;
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={{ flex: 1 }}/>
                <View style={{ flex: 10 }}>
                    { this.props.myAdding ? <Form /> : null }
                    <FlatList 
                        data = {this.getTaskList()}
                        renderItem = {({ item }) => <Task task={item} />}
                        keyExtractor = { item => item.id }
                    />
                </View>
                <Filter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        alignSelf: 'stretch', 
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
        //alignItems: 'center',

    },
});

function mapState(state) {
    return { 
        myFilter: state.filterStatus,
        myTasks: state.tasks,
        myAdding: state.isAdding,
    };
}

export default connect(mapState)(TODOList);