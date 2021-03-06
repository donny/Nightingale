import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles.js';

class CommonJokeScreen extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {
      joke: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.joke) {
      return this.renderLoadingView();
    } else {
      return this.renderJokeView();
    }
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  renderJokeView() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.fetchData}>
          <Text style={styles.mainText}>{this.state.joke}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CommonJokeScreen;
