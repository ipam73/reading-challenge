import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Homepage from './Homepage';

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
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
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
        <Text style={styles.heading}>Reading Challenge</Text>
        <TouchableHighlight style={ styles.button } onPress={ () => this._navigate('YOYOYOYOYO') }>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Landingpage;
