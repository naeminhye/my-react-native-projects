import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import GridTask from './GridTask';

export default class GridToDoList extends Component {
  render() {
 
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 100, justifyContent: 'center', alignItems: 'flex-start', padding: 20 }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>To Do List</Text>
                <Text style={{ fontSize: 20 }}>You have 9 tasks today</Text>    
            </View>
            <GridTask />
        </ScrollView>
    );
  }
}
 