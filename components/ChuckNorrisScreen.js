import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Styles.js';

class ChuckNorrisScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List of Chuck Norris jokes</Text>
      </View>
    )
  }
}

export default ChuckNorrisScreen;
