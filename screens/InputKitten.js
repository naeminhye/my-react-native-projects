import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

import {RkText, RkTextInput, RkTheme} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class InputKitten extends Component {
  static navigationOptions = {
    title: 'Inputs'
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  render() {
    return (
      <ScrollView
        ref={'scrollView'}
        automaticallyAdjustContentInsets={true}
        style={UtilStyles.container}>

        <View style={UtilStyles.section}>
          <RkText rkType='header'>Default input</RkText>
          <View style={UtilStyles.rowContainer}>
            <View style={{flex: 1}}>
              <RkTextInput autoCorrect={false}
                           autoCapitalize={'none'} placeholder='Login' clearButtonMode='always'/>
              <RkTextInput secureTextEntry={true} placeholder='Password' clearButtonMode='always'/>
            </View>
          </View>
        </View>
        <View style={UtilStyles.section}>
          <RkText rkType='header'>Rounded input</RkText>
          <View style={UtilStyles.rowContainer}>
            <View style={{flex: 1}}>
              <RkTextInput rkType='rounded' placeholder='Login'/>
              <RkTextInput secureTextEntry={true} rkType='rounded'
                           placeholder='Password'/>
            </View>
          </View>
        </View>
        <View style={UtilStyles.section}>
          <RkText rkType='header'>Bordered input</RkText>
          <View style={UtilStyles.rowContainer}>
            <View style={{flex: 1}}>
              <RkTextInput rkType='bordered' placeholder='Login'/>
              <RkTextInput secureTextEntry={true} rkType='bordered'
                           placeholder='Password'/>
            </View>
          </View>
        </View>
        <View style={UtilStyles.section}>
          <RkText rkType='header'>With icon</RkText>
          <View style={[UtilStyles.rowContainer]}>
            <View style={{flex: 1}}>
              <RkTextInput label={<Icon style={styles.inputIcon} name='user'/>} placeholder='Login'/>
              <RkTextInput secureTextEntry={true} label={<Icon style={styles.inputIcon} name='lock'/>}
                           placeholder='Password'/>
              <RkTextInput rkType='searchbox' label={<Icon style={[styles.inputIcon, styles.searchIcon]} name='search'/>}
                           placeholder='Search' style={{paddingRight: 10}} clearButtonMode='always'/>
            </View>
          </View>
        </View>
        <View style={UtilStyles.section}>
          <RkText rkType='header'>Labels</RkText>
          <View style={[UtilStyles.columnContainer]}>
            <RkTextInput label='Login' rkType='form'/>
            <RkTextInput rkType="form" secureTextEntry={true} label='Password'/>
          </View>
        </View>
        <View style={UtilStyles.section}>
          <RkText rkType='header'>Top Labels</RkText>
          <View style={[UtilStyles.rowContainer]}>
            <View style={{flex: 1}}>
              <RkTextInput rkType="topLabel" label='Login'/>
              <RkTextInput secureTextEntry={true} rkType="topLabel" containerStyle={{marginTop: 15}}
                           label='Password'/>
            </View>
          </View>
        </View>
      </ScrollView>

    );
  }
}

let styles = StyleSheet.create({
  inputIcon: {
    fontSize: 15,
    color: '#0000003a',
    marginLeft: 4,
  },
  searchIcon: {
    marginLeft: 16,
  }
});

RkTheme.setType('RkTextInput','searchbox',{
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#0000001A',
    underlineWidth: 1,
    underlineColor:'#0000001A',
  });  

const UtilStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor :'white'
    },
    titleText: {
      fontSize: 20,
      fontFamily: 'System',
      color: RkTheme.current.colors.text.base
    },
    section: {
      marginTop: 14,
      paddingHorizontal: 24,
      paddingVertical: 15,
    },
    bordered: {
      borderBottomColor: '#0000001A',
      borderBottomWidth: 0.5
    },
    rowContainer: {
      marginTop: 16,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    columnContainer: {
      marginTop: 16
    },
    spaceAround: {
      marginHorizontal: 5
    },
    spaceH: {
      marginHorizontal: 5
    },
    spaceTop: {
      marginTop: 8
    },
    spaceBottom: {
      marginBottom: 8
    },
    spaceVertical: {
      marginVertical: 8
    },
    description: {
      paddingRight: 10,
      paddingLeft: 20,
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flex: 1
    },
    exampleView: {
      paddingRight: 10,
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flex: 1
    },
    text: {
      color: RkTheme.current.colors.text.base,
    },
    codeText: {
      color: RkTheme.current.colors.danger,
    },
    tab: {
      paddingLeft: 20,
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      paddingTop: 20,
    },
    column: {
      flexDirection: 'column'
    },
    tabContent: {
      fontSize: 32,
      alignSelf: 'center',
      padding: 30,
      color: RkTheme.current.colors.grey500
    }
  });