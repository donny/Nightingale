import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import styles from './Styles.js';
import ChuckNorrisScreen from './components/ChuckNorrisScreen.js';
import LinusTorvaldsScreen from './components/LinusTorvaldsScreen.js';

const MainScreenNavigator = TabNavigator({
  'Linus Torvalds': { screen: LinusTorvaldsScreen },
  'Chuck Norris': { screen: ChuckNorrisScreen },
}, {
  tabBarOptions: {
    activeTintColor: 'dodgerblue',
    inactiveTintColor: 'grey',
    showIcon: true,
    indicatorStyle: {
      backgroundColor: 'dodgerblue'
    },
    style: {
      backgroundColor: 'azure',
    }
  }
});

export default MainScreenNavigator;
