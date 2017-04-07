# nightingale

Nightingale is a React Native app to display jokes from the Internet Chuck Norris Database.

### Background

This project is part of [52projects](https://donny.github.io/52projects/) and the new stuff that I learn through this project: [React Native](https://facebook.github.io/react-native/), [React Navigation](https://reactnavigation.org), [Create React Native App](https://github.com/react-community/create-react-native-app), and [Expo](https://expo.io).

### Project

Nightingale can be run by installing Expo from the App Store or Google Play Store, and entering `https://exp.host/@donny/nightingale` as the project URL. The app gets the jokes from the [Internet Chuck Norris Database](http://www.icndb.com). It has two tabs: `Linus Torvalds` for tech jokes and `Chuck Norris` for non-tech jokes. New jokes can be fetched by tapping the joke text. The iOS and Android screenshots can be seen below:

![Screenshot1](https://raw.githubusercontent.com/donny/nightingale/master/screenshot1.png)
![Screenshot1](https://raw.githubusercontent.com/donny/nightingale/master/screenshot2.png)

### Implementation

There are many React Native boilerplates, for example: [Pepperoni](http://getpepperoni.com) and [Create React Native App](https://github.com/react-community/create-react-native-app) (CRNA). Nightingale uses CRNA as the React Native boilerplate. One of the benefits of using CRNA is its integration with [Expo](https://expo.io). Expo doesn't require Xcode or Android Studio. And it hosts the project and provides the Expo app that allows users to test and run our React Native apps.

To get started with [Create React Native App](https://github.com/react-community/create-react-native-app), we could run the following commands:

```shell
yarn global add create-react-native-app
create-react-native-app nightingale
cd nightingale
yarn run ios
```

I have used the [Internet Chuck Norris Database](http://www.icndb.com) before and the [REST API](http://www.icndb.com/api/) is super easy to use. For the `Chuck Norris` jokes, we use the following resource URL: `http://api.icndb.com/jokes/random?escape=javascript&exclude=[nerdy,explicit]`. And for the `Linus Torvalds` jokes: `http://api.icndb.com/jokes/random?firstName=Linus&lastName=Torvalds&escape=javascript&limitTo=[nerdy]&exclude=[explicit]`.

The main screen is implemented as [`CommonJokeScreen.js`](https://github.com/donny/nightingale/blob/master/components/CommonJokeScreen.js) with the following `render`:

```javascript
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
```

### Conclusion

...
