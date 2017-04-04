import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import styles from './Styles.js';
import ChuckNorrisScreen from './components/ChuckNorrisScreen.js';
import LinusTorvaldsScreen from './components/LinusTorvaldsScreen.js';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: ChuckNorrisScreen },
  All: { screen: LinusTorvaldsScreen },
});

export default MainScreenNavigator;
