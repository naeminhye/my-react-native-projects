import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import GridView from 'react-native-super-grid';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Font } from 'expo';

export default class GridTask extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
          'dosis-medium': require('../assets/fonts/Dosis-Medium.ttf'),
        });
        
        this.setState({ fontLoaded: true });
    }

    render() {
    const tasks = [
        { id: 1, time: '7:00 AM', name: 'JHKJHkjhkjhsdfkjsdhfksjdhf', done: true },
        { id: 2, time: '10:45 AM', name: 'Đi ỉa', done: false },
        { id: 3, time: '11:00 AM', name: 'Đi đái', done: false },
        { id: 4, time: '12:00 PM', name: 'Ngủ trưa', done: true },
        { id: 5, time: '1:00 PM', name: 'Đi học', done: false },
        { id: 6, time: '4:00 PM', name: 'Tắm rửa', done: false },
        { id: 7, time: '5:30 PM', name: 'Giặt đồ', done: true },
        { id: 8, time: '7:00 AM', name: 'Go to school', done: true },
        { id: 9, time: '7:00 AM', name: 'Go to school', done: true },
      ];

        return(
            <GridView
            itemWidth={200}
            items={tasks}
            style={styles.gridView}
            renderItem={item => (
                <View style={styles.itemContainer}>
                    <ElevatedView
                        elevation={4}
                        style={styles.stayElevated}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View  style={{ flex: 6 }}>
                                <Icon.Button name="clock" size={18} color="#cecece" backgroundColor='transparent' iconStyle={{ marginRight: 20 }} >
                                    { this.state.fontLoaded ? (
                                    <Text style={[styles.itemTime, { fontFamily: 'dosis-medium' }]}>
                                        {item.time}
                                    </Text> ) : <Text style={styles.itemTime}>{item.time}</Text> }
                                    {/* <Text style={styles.itemTime}> {item.time}</Text> */}
                                </Icon.Button>
                                <Text style={styles.itemName}>{item.name}</Text>
                            </View>
                            <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="checkbox-blank-outline" size={36} color='red' />
                            </View>
                        </View>
                    </ElevatedView>
                </View>
            )}
        />
        );
    }
}


const styles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      flex: 1,
    },
    itemName: {
      fontSize: 32,
      color: '#34495e',
      fontWeight: '600',
    },
    itemTime: {
      fontSize: 24,
      color: '#cecece',
      padding: 5,
    },
      stayElevated: {
          flex: 1,
          justifyContent: 'flex-start',
          borderRadius: 10,
          padding: 20,
          height: 160,
          backgroundColor: '#fff',
          margin: 5,
      }
    
  });