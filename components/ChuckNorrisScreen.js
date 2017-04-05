import React from 'react';
import { StyleSheet, Text, View, ListView, Image } from 'react-native';
import styles from '../Styles.js';

class ChuckNorrisScreen extends React.Component {
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

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}

export default ChuckNorrisScreen;
