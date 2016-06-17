import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  DatePickerAndroid,
  Image,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../../actions';
import Button from 'apsl-react-native-button';

const icon = require('../../../images/BuddyPlaceholder.png');

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0E0E0',
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
  headingIcon: {
    width: 70,
    height: 70,
  },
  headingText: {
    paddingLeft: 20,
    // fontWeight: 'bold',
    flex: 1,
  },
  headingTitle: {
    // fontWeight: 'bold',
  },
  leftCol: {
    flex: 1,
  },
  rightCol: {
    alignItems: 'flex-end',
  },
  date: {
    flexDirection: 'row',
  },
  dateText: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 15,
  },
  dateIcon: {
    color: '#8E44AD',
  },
  button: {
    marginTop: 15,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 2,
    width: 200,
    height: 30,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  subHeading: {
    // fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
  },
});

class AddTimeScreen extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {
      minsRead: 0,
      maxText: today.toLocaleDateString(),
      maxDate: today,
    };
    this.onChangeMinsRead = this.onChangeMinsRead.bind(this);
    this.showPicker = this.showPicker.bind(this);
    this.onAddTimePress = this.onAddTimePress.bind(this);
  }

  onChangeMinsRead(minsRead) {
    this.setState({minsRead});
  }

  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  onAddTimePress() {
    this.props.setStudentTime(this.state.maxDate, this.state.minsRead, this.props.studentID);
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.main}>
        <TouchableHighlight style={styles.row}>
          <View style={styles.headingContainer}>
            <View style={styles.subRowContainer}>
              <Image style={styles.headingIcon} source={icon} />
              <View style={styles.headingText}>
                <Text style={styles.subHeading}>Date:</Text>
                <TouchableWithoutFeedback
                  onPress={this.showPicker.bind(this, 'max', {
                    date: this.state.maxDate,
                    maxDate: new Date(),
                  })}
                >
                  <View style={styles.date}>
                    <Text style={styles.dateText}>{`${this.state.maxText} `}</Text>
                    <Text style={styles.dateIcon}>&#x25E2;</Text>
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.subHeading}>Minutes Read:</Text>
                <TextInput
                  style={{height: 50, width: 100, borderColor: 'gray', borderWidth: 1, fontSize: 20}}
                  keyboardType="numeric"
                  onChangeText={this.onChangeMinsRead}
                  value={this.state.minsRead}
                />
              </View>
            </View>
            <Button style={styles.button} textStyle={styles.buttonText} onPress={this.onAddTimePress.bind(this)}>
              Save
            </Button>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const studentID = props.studentID;
  return {
    navigator: props.navigator,
    studentID,
    student: state.reducers.studentList[studentID],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setStudentTime: (readDate, readTime, studentID) => {
      dispatch(actions.setStudentTime(readDate, readTime, studentID));
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddTimeScreen);
