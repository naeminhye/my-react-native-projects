import React from 'react';
import { 
    View,
    TouchableOpacity, 
    StyleSheet,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return(
            <View style={styles.header}>
                <Text />
                <Text>TODO LIST</Text>
                <TouchableOpacity
                    onPress={() => this.props.dispatch({ type: 'TOGGLE_ADDING' })}>
                    <Icon
                        name='plus'
                        type='simple-line-icon'
                        color='black'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});

export default connect()(Header);