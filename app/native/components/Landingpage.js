import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import IconButton from 'react-native-icon-button';

const backgroundImage = require('../../images/CharmCityReaders_mobile.jpeg');
const facebookLogin = require('../../images/sign-in-facebook.png');
const emailLogin = require('../../images/sign-in-with-email.png');
const googleLogin = require('../../images/sign-in-with-google.png');

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginBottom: 15,
    width: 290,
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
  },
  buttons: {
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});


class Landingpage extends React.Component {
  login() {
    // do some logic here, if new user show welcome, otherwise don't
    this.props.navigator.push({
      name: 'Login',
      title: 'Sign In with Email',
    });
  }

  _navigate(name) {
    // do some logic here, if new user show welcome, otherwise don't
    this.props.navigator.push({
      name: 'Welcome',
      title: '',
      display: false,
      passProps: {
        name,
      },
    });
  }

  // google button
            // <IconButton
            //     style={styles.button}
            //   icon={googleLogin}
            //   iconSize={58}
            //   onPress={ () => this._navigate('YOYOYOYOYO') }
            // />

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={backgroundImage}>
          <View style={styles.buttons}>
            <IconButton
              style={styles.button}
              icon={emailLogin}
              iconSize={58}
              onPress={ () => this.login() }
            />
          </View>
        </Image>
      </View>
    );
  }
}

module.exports = Landingpage;
