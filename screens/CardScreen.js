import React from 'react';
import {
    View, Text, Image, ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
    Card, ListItem, Button
} from 'react-native-elements'

export default class CardScreen extends React.Component {

    render() {
        return(
            <View>
            <ScrollView>
                <Card
                    title="EXO Goes All Out Teasing Fans With Upcoming 'Power' Release"
                    image={require('../assets/images/image.jpg')}
                    imageStyle={{width: null, height: 300}}>
                    <Text style={{marginBottom: 10}}>
                        EXO is returning with a re-release of their The War album early next month and are upping anticipation for The War: The Power of Music extended album through a variety of teaser images and videos that bring the Korean boy band back to its conceptual origins.
                    </Text>
                </Card>
                <Card
                    title="EXO Returns With 'The Power of Music'"
                    image={require('../assets/images/image1.gif')}
                    imageStyle={{width: null, height: 300}}>
                    <Text style={{marginBottom: 10}}>
                        Their anticipated comeback becomes powerful with the release of their extended album "The War: The Power of Music" as EXO teases a new image that shows their special qualities. 
                    </Text>
                </Card>
            </ScrollView>
         </View>
        );
    }
}