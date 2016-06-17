import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

import Homepage from './Homepage';
const backgroundImage = require('../../images/CharmCityReaders_mobile.jpeg');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#946199',
  },
  heading: {
    fontSize: 22,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 20,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    flexDirection: 'row',
    alignItems:'flex-end',
  },
});


class Landingpage extends React.Component {
  _navigate(name) {
    this.props.navigator.push({
      name: 'Homepage',
      title: 'Charm City Readers',
      passProps: {
        name,
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={backgroundImage}>
          <TouchableHighlight style={styles.button} onPress={ () => this._navigate('YOYOYOYOYO') }>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableHighlight>
        </Image>
      </View>
    );
  }
}

module.exports = Landingpage;
