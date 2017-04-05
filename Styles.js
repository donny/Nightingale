import { StyleSheet } from 'react-native';
import Expo from 'expo';

export default styles = StyleSheet.create({
  container: {
    marginTop: Expo.Constants.statusBarHeight,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'cadetblue'
  }
});
