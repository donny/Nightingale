import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-1CE0WmolMzDTvzzcspj8skCzbOTYOHc",
  authDomain: "fiftytwo-kestrel.firebaseapp.com",
  databaseURL: "https://fiftytwo-kestrel.firebaseio.com",
  storageBucket: "fiftytwo-kestrel.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
