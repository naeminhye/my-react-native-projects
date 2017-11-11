import React from 'react';
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import Animation from 'lottie-react-native';

import anim from './assets/hamburger-arrow-transition.json';

export default class LottieDemo extends React.Component {
    componentDidMount() {
        this.animation.play();
      }

    render() {
        return(
<View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Lottie Animations :-)</Text>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80
            }}
            loop={true}
            source={anim}
          />
        </View>

      </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A6207E'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff'
    }
  });
  