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
import Button from 'apsl-react-native-button';

const icon = require('../../../images/BuddyPlaceholder.png');

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0E0E0',
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
  },
  dateIcon: {
    color: '#8E44AD',
  },

  button: {
    backgroundColor: '#E0E0E0',
    alignItems: 'flex-end',
    width: 70,
    height: 30,
  },
  buttonText: {
    fontSize: 10,
  },
});

// async function selectDate() {
//   try {
//     const {action, year, month, day} = await DatePickerAndroid.open({
//       // Use `new Date()` for current date.
//       // May 25 2020. Month 0 is January.
//       date: new Date(2020, 4, 25),
//     });
//     if (action !== DatePickerAndroid.dismissedAction) {
//       // Selected year, month (0-11), day
//     }
//   } catch ({code, message}) {
//     console.warn('Cannot open date picker', message);
//   }
// }

// function onAddTimePress() {
//   console.log('in add time press');
// }

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
    console.log("changing input", minsRead);
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
                <Text>Date:</Text>
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
                <Text>Minutes Read:</Text>
                <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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

module.exports = connect(mapStateToProps, null)(AddTimeScreen);
