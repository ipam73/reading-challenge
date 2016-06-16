import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

const icon = require('../../images/log-in-with-clever-large.png');

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
  headingContainer: {
    paddingBottom: 30,
    flexDirection: 'row',
  },
  headingText: {
    // fontWeight: 'bold',
    flex: 1,
  },
  headingTitle: {
    // fontWeight: 'bold',
  },
  icon: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#2f67ab',
    width: 200,
    height: 30,
    flex: 1,
  },
});

function Support() {
  return (
    <View style={styles.main}>
      <TouchableHighlight style={styles.row}>
        <View style={styles.headingContainer}>
          <View style={styles.headingText}>
            <Text style={styles.headingTitle}>Contact Information</Text>
            <Image style={styles.icon} source={icon} />
            <Text>
              If you have any questions or concerns about the reading challenge,
              please see your child’s school for more information. If you have technical
               issues with the use of this app, please email CitySchoolsIT@bcps.k12.md.us
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

module.exports = Support;
