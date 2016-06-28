import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../../actions';
import Button from 'apsl-react-native-button';

var styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
  },
  row: {
    backgroundColor: '#FBFBFB',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  subRowContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
  },
  headingText: {
    paddingLeft: 20,
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    marginTop: 15,
    borderColor: '#8E44AD',
    backgroundColor: 'white',
    borderRadius: 3,
    borderWidth: 2,
    width: 100,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#8E44AD',
  },
  buttonSignUp: {
    marginTop: 15,
    borderColor: '#8E44AD',
    backgroundColor: '#8E44AD',
    borderRadius: 3,
    borderWidth: 2,
    width: 100,
    height: 30,
  },
  buttonTextSignUp: {
    fontSize: 14,
    color: '#FBFBFB',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    paddingBottom: 10,
  },
  errorMessage: {
    color: '#e92929',
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onLoginPress = this.onLoginPress.bind(this);
    this.onSignUpPress = this.onSignUpPress.bind(this);
  }

  onSignUpPress() {
    this.props.createUser(this.state.email, this.state.password, this.props.navigator);
  }

  onLoginPress() {
    this.props.loginWithPassword(this.state.email, this.state.password, this.props.navigator);
  }

  onChangeUsername(text) {
    this.setState({email: text});
  }


  onChangePassword(text) {
    this.setState({password: text});
  }

  render() {
    return (
      <View style={styles.main}>
        <TouchableHighlight style={styles.row}>
          <View style={styles.headingContainer}>
            <View style={styles.subRowContainer}>
              <View style={styles.headingText}>
                <Text style={styles.subHeading}>Charm City Readers</Text>
                <TextInput
                  style={{borderColor: 'gray', borderWidth: 1}}
                  placeholder="Email"
                  onChangeText={this.onChangeUsername}
                  value={this.state.email}
                />
                <TextInput
                  style={{borderColor: 'gray', borderWidth: 1}}
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={this.onChangePassword}
                  value={this.state.password}
                />
              </View>
            </View>
            <View style={styles.buttons}>
              <Button style={styles.button} textStyle={styles.buttonText} onPress={this.onLoginPress}>
                Sign In
              </Button>
              <Button style={styles.buttonSignUp} textStyle={styles.buttonTextSignUp} onPress={this.onSignUpPress}>
                Sign Up
              </Button>
            </View>
            <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.reducers.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginWithPassword: (email, password, navigator) => {
      dispatch(actions.loginWithPasswordNative(email, password, navigator));
    },
    createUser: (email, password, navigator) => {
      dispatch(actions.createUserNative(email, password, navigator));
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Login);
