import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class Filter extends React.Component {
    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if( statusName === myFilterStatus)
            return { color: 'yellow', fontWeight: 'bold'};
        return styles.btnText;
    }

    setFilterStatus(actionType) {
        this.props.dispatch({
            type: actionType,
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={ () => this.setFilterStatus('FILTER_SHOW_ALL') }>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.setFilterStatus('FILTER_DONE') }>
                    <Text style={this.getTextStyle('DONE')}>DONE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.setFilterStatus('FILTER_UNDONE') }>
                    <Text style={this.getTextStyle('UNDONE')}>UNDONE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#583C3C', 
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    btnText: {
        color: 'white'
    }
});

function mapState(state) {
    return { 
        myFilterStatus: state.filterStatus,
    };
}

export default connect(mapState)(Filter);