import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Linking,
  Image,
  WebView,
} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../../actions';


var styles = StyleSheet.create({
  webView: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 350,
  },
});

class CleverWebView extends React.Component {
  render() {
    return (
      <WebView
        automaticallyAdjustContentInsets={false}
        style={styles.webView}
        source={{uri: "http://google.com"}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
      />
    );
  }
}

function mapStateToProps(state) {
  var parentID = '';
  if (state.reducers.user) {
    parentID = state.reducers.user.uid;
  }
  return {
    parentID,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStudentList: (parentID) => {
      dispatch(actions.getStudentList(parentID));
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(CleverWebView);
