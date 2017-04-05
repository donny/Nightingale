import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import styles from '../Styles.js';

class LinusTorvaldsScreen extends React.Component {
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
        <Text>{this.state.joke}</Text>
      </View>
    )
  }
}

export default LinusTorvaldsScreen;
