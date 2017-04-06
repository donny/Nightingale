import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles.js';
import CommonJokeScreen from './CommonJokeScreen.js';

class ChuckNorrisScreen extends CommonJokeScreen {
  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Image
          source={require('../images/dumbbell.png')}
          style={[{tintColor: tintColor}]}
        />
      )
    }
  }

  fetchData() {
    const resource = 'http://api.icndb.com/jokes/random?' +
      'escape=javascript&' +
      'exclude=[nerdy,explicit]'
    return fetch(resource)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          joke: responseData.value.joke
        })
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }
}

export default ChuckNorrisScreen;
