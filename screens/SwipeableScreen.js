import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Swipeable from 'react-native-swipeable';

export default class SwipeableScreen extends React.Component {
    state = {
        currentlyOpenSwipeable: null
    };
    
    handleScroll = () => {
        const {currentlyOpenSwipeable} = this.state;

        if (currentlyOpenSwipeable) {
            currentlyOpenSwipeable.recenter();
        }
    };

    render() {
        const {currentlyOpenSwipeable} = this.state;
        const itemProps = {
            onOpen: (event, gestureState, swipeable) => {
                if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
                    currentlyOpenSwipeable.recenter();
                }
    
                this.setState({currentlyOpenSwipeable: swipeable});
            },
            onClose: () => this.setState({currentlyOpenSwipeable: null})
        };

        return (
            <View style={styles.container}>
                <Swipeable
                    leftContent={(
                        <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
                            <Text>Pull action</Text>
                        </View>
                    )}
                    rightButtons={[
                        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
                            <Text>1</Text>
                        </TouchableOpacity>,
                        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
                            <Text>2</Text>
                        </TouchableOpacity>
                    ]}
                    onRightButtonsOpenRelease={itemProps.onOpen}
                    onRightButtonsCloseRelease={itemProps.onClose}
                >
                    <View style={[styles.listItem, {backgroundColor: 'salmon'}]}>
                        <Text>Example 1</Text>
                    </View>
                </Swipeable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20
    },
    listItem: {
      height: 75,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftSwipeItem: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 20
    },
    rightSwipeItem: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 20
    },
  });