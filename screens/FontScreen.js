import React from 'react';
import {
    View, Text, 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

export default class FontScreen extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
          'dancing-script-regular': require('../assets/fonts/dancing-script-regular.ttf'),
        });
        
        this.setState({ fontLoaded: true });
    }
    

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'dancing-script-regular', fontSize: 56 }}>
                  I'm Using Custom Fonts From Expo
                </Text>
              ) : null
            }
            </View>
        );
    }
}