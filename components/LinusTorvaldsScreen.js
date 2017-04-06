import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles.js';
import CommonJokeScreen from './CommonJokeScreen.js';

class LinusTorvaldsScreen extends CommonJokeScreen {
  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Image
          source={require('../images/keyboard.png')}
          style={[{tintColor: tintColor}]}
        />
      )
    }
  }

  fetchData() {
    const resource = 'http://api.icndb.com/jokes/random?' +
      'firstName=Linus&' +
      'lastName=Torvalds&' +
      'escape=javascript&' +
      'limitTo=[nerdy]&' +
      'exclude=[explicit]'
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

export default LinusTorvaldsScreen;
