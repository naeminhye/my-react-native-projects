import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    ListView,
    Dimensions
  } from 'react-native';
import {
RkTheme,
RkButton,
RkModalImg,
RkText,
RkStyleSheet
} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class KittenDemo extends Component {
    static navigationOptions = {
      title: 'Images'
    };
  
    constructor(props) {
      super(props);
  
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
      this._images = [
        {uri: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1509463542054-6bbf48162621?auto=format&fit=crop&w=1534&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1509190043825-179c637fdba8?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1415902051846-2ad925a71020?auto=format&fit=crop&w=1567&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1469957761306-556935073eba?auto=format&fit=crop&w=1430&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1460777037470-0509feac2dc1?auto=format&fit=crop&w=1575&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1432110847799-39dfbae1299f?auto=format&fit=crop&w=1575&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1459535653751-d571815e906b?auto=format&fit=crop&w=1498&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {uri: 'https://images.unsplash.com/photo-1470274307695-febe05a6dd3d?auto=format&fit=crop&w=1575&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
      ];
      this.state = {
        ds: ds.cloneWithRows(this._images),
      };
  
      let {width} = Dimensions.get('window');
      this.imgSize = (width - 16) / 3;
    }
  
    _renderFooter(options) {
      return (
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 20
        }}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <RkButton rkType='clear small'>
              <Icon name={'heart'} style={styles.buttonIcon}/>
              <RkText rkType='inverse'>18</RkText>
            </RkButton>
          </View>
          <View style={{flex: 1}}>
            <RkButton rkType='clear small'>
              <Icon name={'comment-o'} style={styles.buttonIcon}/>
              <RkText rkType='inverse'>2</RkText>
            </RkButton>
          </View>
          <View style={{flex: 1}}>
            <RkButton rkType='clear small'>
              <Icon name={'send-o'} style={styles.buttonIcon}/>
              <RkText rkType='inverse'>7</RkText>
            </RkButton>
          </View>
        </View>
      );
    }
  
    _renderHeader(options) {
      return (
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <RkButton rkType='clear' onPress={options.closeImage}>Close</RkButton>
          <RkButton rkType='clear'>
            <Icon style={styles.dot} name={'circle'}/>
            <Icon style={styles.dot} name={'circle'}/>
            <Icon style={styles.dot} name={'circle'}/>
          </RkButton>
        </View>
      );
    }
  
    _renderGallery() {
      return (
        <ListView
          pageSize={3}
          contentContainerStyle={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
          scrollRenderAheadDistance={500}
          dataSource={this.state.ds}
          renderRow={(rowData, sectionID, rowID) => {
            return (
              <RkModalImg
                style={{width: this.imgSize, height: this.imgSize}}
                source={this._images}
                index={rowID}/>
            )
          }}
        />
      )
    }
  
    render() {
      return (
        <View style={{flex: 1}}>
  
          <ScrollView
            automaticallyAdjustContentInsets={true}
            style={UtilStyles.container}>
  
            <View style={[UtilStyles.section, UtilStyles.bordered, styles.imagesContainer]}>
              <RkText style={styles.header} rkType='header'>Basic example</RkText>
              <View style={[UtilStyles.rowContainer, {paddingLeft: 2}]}>
                <RkModalImg style={{width: this.imgSize, height: this.imgSize}} source={{uri: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                <RkModalImg style={{width: this.imgSize, height: this.imgSize}} source={{uri: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                <RkModalImg style={{width: this.imgSize, height: this.imgSize}} source={{uri: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
              </View>
            </View>
            <View style={[UtilStyles.section, UtilStyles.bordered, styles.imagesContainer]}>
              <RkText style={styles.header} rkType='header'>Custom header and footer</RkText>
              <View style={[UtilStyles.rowContainer, {paddingLeft: 2}]}>
                <RkModalImg style={{width: this.imgSize, height: this.imgSize}}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            headerContentStyle={{backgroundColor: 'red'}}
                            source={{uri: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                <RkModalImg style={{width: this.imgSize, height: this.imgSize}}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            source={{uri: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                <RkModalImg style={{width: this.imgSize, height: this.imgSize}}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                            source={{uri: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
  
              </View>
            </View>
            <View style={[UtilStyles.section, UtilStyles.bordered, styles.imagesContainer]}>
              <RkText style={styles.header} rkType='header'>Gallery Example</RkText>
              <View style={[UtilStyles.rowContainer, {paddingLeft: 2}]}>
                {this._renderGallery()}
              </View>
            </View>
          </ScrollView>
        </View>
      )
    }
  }
  
let styles = RkStyleSheet.create(theme => ({
    imagesContainer: {
      paddingHorizontal: 0
    },
    header: {
      paddingHorizontal: 24,
    },
    dot: {
      fontSize: 6.5,
      marginLeft: 4,
      marginVertical: 6,
      color: theme.colors.text.inverse
    },
    buttonIcon: {
      marginRight: 7,
      fontSize: 19.7,
      color: theme.colors.text.inverse
    },
  }));

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