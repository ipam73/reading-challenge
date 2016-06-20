import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

const icon = require('../../images/baltimore_city_logo.jpg');

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
  headingContainer: {
    flexDirection: 'row',
  },
  headingText: {
    flex: 1,
  },
  headingTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  normalText: {
    fontSize: 14,
  },
  icon: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#2f67ab',
    width: 200,
    height: 60,
    flex: 1,
    alignSelf: 'center',
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
            <Text style={styles.normalText}>
              If you have any questions or concerns about the reading challenge,
              please see your child’s school for more information. If you have technical
               issues with the use of this app, please email CitySchoolsIT@bcps.k12.md.us.
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

module.exports = Support;
