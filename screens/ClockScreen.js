import React from 'react';
import {
    View,
    StyleSheet,
    Text,

} from 'react-native';

import moment from 'moment';
import KeepAwake from 'react-native-keep-awake';

export default class ClockScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // time: moment().format("LTS"),
            hour: this.pad(moment().hour(), 2),
            minute: moment().minute(),
            second: this.pad(moment().second(), 2),
            date: moment().format("LL"),
          };
    }

    pad (str, max) {
        str = str.toString();
        return str.length < max ? this.pad("0" + str, max) : str;
    }

    updateTime(){
        this.setState({
            // time: moment().format("LTS"),
            hour: this.pad(moment().hour(), 2),
            minute: moment().minute(),
            second: this.pad(moment().second(), 2),
            date: moment().format("LL"),
        });
    }

    componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTime(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.timeContainer}>
                    <View style={styles.box}><Text style={styles.timeText}>{this.state.hour}</Text></View>
                    <Text style={styles.timeText}>:</Text>
                    <View style={styles.box}><Text style={styles.timeText}>{this.state.minute}</Text></View>
                    <Text style={styles.timeText}>:</Text>
                    <View style={styles.box}><Text style={styles.timeText}>{this.state.second}</Text></View>
                </View>
                {/* <Text style={styles.timeText}>{this.state.hour}:{this.state.minute}:{this.state.second}</Text> */}
                <Text style={styles.dateText}>{this.state.date}</Text>
                {/* <KeepAwake /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeText: {
        fontSize: 50, 
        color: '#000',
    },
    dateText: {
      color: '#999999',
      fontSize: 20,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#E6FDDF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#767676',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    // hourBox: {
    //     width: 100,
    //     height: 100,
    //     margin: 10,
    //     backgroundColor: '#A0DB8E',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 20,
    //  },
    //  minuteBox: {
    //     width: 100,
    //     height: 100,
    //     margin: 10,
    //     backgroundColor: '#FFC0CB',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 20,
    //  },
    //  secondBox: {
    //     width: 100,
    //     height: 100,
    //     margin: 10,
    //     backgroundColor: '#C0D6E4',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 20,
    //  },
  });