// library that deals with talking to backend
var Constants = require('../constants');
var $ = require("jquery");
var _ = require("underscore");
var moment = require("moment");


/////////////////////////////////////////////////////////
// Downgrading to firebase 2.4, since newsest version does not work w/react
// see:  https://medium.com/@Pier/firebase-is-broken-for-react-native-7f78b7a066da#.gotw818vu
// and PR: https://github.com/ipam73/reading-challenge/commit/35247388d6ccc29a8dfd2bb1768da3e13a2c07df
// var firebase = require('firebase')
// var config = {
//     apiKey: "AIzaSyCAAUrjrCNH_xCigW0T9qZxqeuaUpfcKmw",
//     authDomain: "reading-challenge.firebaseapp.com",
//     databaseURL: "https://reading-challenge.firebaseio.com",
//     storageBucket: "firebase-reading-challenge.appspot.com",
// };
// firebase.initializeApp(config);
// db = firebase.database();
/////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Temporary workaround until Firebase fixes bug
var Firebase = require('firebase');
var firebaseURI = "https://reading-challenge.firebaseio.com/";

function setFirebaseRef(ref) {
  return {
    type: 'FIREBASE_REF_SET',
    value: ref,
  };
}
/////////////////////////////////////////////////////////////
auth = firebase.auth();

// helper function for ajax calls
function getCookie(name) {
  var parts = document.cookie.split(name + "=");
  if (parts.length === 2) {
    var v = parts.pop().split(";").shift();
    return decodeURIComponent(v);
  }
}

// action to login to Google via a popup. Dispatch error or user
function loginWithGoogle() {

  return function(dispatch) {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth = firebase.auth()
    auth.signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken; // empty in current scope
      var user = result.user;
      dispatch(loginSuccess(token, user));
    }).catch(function(err) {
      console.log("error logging in with google", err);
      dispatch(authFailure(err));
    });
  };
}

function logout() {

  return function(dispatch) {
    firebase.auth().signOut().then(() => {
      dispatch(logoutSuccess());
    }, (err) => {
      dispatch(authFailure(err));
    });
  };
}

function loginSuccess(token, user) {
  // TODO: ensure that firebase ref for this user exists
  return {
    type: Constants.LOGIN_SUCCESS,
    user: user,
  };
}

function logoutSuccess() {
  // TODO: ensure that firebase ref for this user exists
  return {
    type: Constants.LOGOUT_SUCCESS,
  };
}

// check if user is logged in. return user
function isLoggedIn() {
  return auth.currentUser;
};

// helper function for ajax calls
function getCsrfHeader() {
  return { "x-csrf-token": getCookie("csrf-token") };
}

// ajax call for new student login
function _postAddStudent(query) {
  return $.ajax({
    url: "/addstudent",
    method: "POST",
    // headers: getCsrfHeader(),
    headers: { 'Access-Control-Allow-Origin': '*' },
    crossDomain: true,
    datatype: 'jsonp',
    // data: query
  });
}

function addStudentMobile() {
  return function (dispatch) {
    fetch('http://localhost:3000/addstudent')
    .then((response) =>{
      response.text();
      return dispatch(addStudentSuccess());
    })
    .then((responseText) => {
      console.log(responseText);
      response.text();
      return dispatch(addStudentSuccess());
    })
    .catch((error) => {
      console.warn(error);
      return dispatch(addStudentFailure(errorMessage));
    });

  //   ajaxCall.always(_.bind(function() {
  //     // in the future should have a loading screen
  //   }, this)).done(_.bind(function(data) {
  //     return dispatch(addStudentSuccess());
  //   }, this)).fail(_.bind(function() {
  //     var errorMessage = "An error has occurred while saving your settings. Please refresh the page. If the error continues, contact support@clever.com.";
  //     return dispatch(addStudentFailure(errorMessage));
  //   }, this));
  };

}

function addStudent() {
  // uses redux-thunk middleware

  return function (dispatch) {

    var ajaxCall = _postAddStudent({student: "my student"});

    ajaxCall.always(_.bind(function() {
      // in the future should have a loading screen
    }, this)).done(_.bind(function(data) {
      return dispatch(addStudentSuccess());
    }, this)).fail(_.bind(function() {
      var errorMessage = "An error has occurred while saving your settings. Please refresh the page. If the error continues, contact support@clever.com.";
      return dispatch(addStudentFailure(errorMessage));
    }, this));
  };
}

function addStudentSuccess() {
  console.log("addStudentSuccess: ");
  return {
    type: Constants.ADD_STUDENT_SUCCESS,
    studentList: {} //load this in the list in
  };
}

function addStudentFailure() {
  console.log("addStudentFailure: ");
  return {
    type: Constants.ADD_STUDENT_FAILURE,
    studentList: {} //load this in the list in
  };
}

function setStudentList(students) {
  console.log("ACTIONS setStudentList");
  return {
    type: Constants.GET_STUDENT_LIST,
    studentList: students //load this in the list in
  };
}

// getStudentList dummy func
// GET ALL THE DATA FOR STUDENTS
function getStudentList() {
  console.log("ACTIONS: getStudentList AGAIN ASKFJ PAM");
  return (dispatch, getState) => {
    // TODO: use parentID instead of 1
    var ref = new Firebase(firebaseURI + "parents/1");

    ///////////////////////////////////////////////////////////////////////
    // temporarily commenting out until firebase fixes bug, see top of file
    // var ref = db.ref("/parents/1");

    return ref.child("students").once("value", (snapshot) => {
      dispatch(setStudentList(snapshot.val()));
    });
  };
}

function timeFormIsValid(newTime) {
  var formIsValid = true;
  var errors = {}; // clear any previous errors

  if (newTime === null) {
    errors.minutes = "Value cannot be blank.";
    formIsValid = false;
  }

  var inputTimeIsNumber = !isNaN(newTime);

  if (inputTimeIsNumber === false) {
    errors.minutes = "Please input a valid number.";
    formIsValid = false;
  }

  return {
    type: Constants.TIME_FORM_IS_VALID,
    errors,
    formIsValid,
  };
}

// newTime = {readDate: <string format YYMMDD>, readMinutes: <minutes>}
function setStudentTime(readDate, readTime, studentID, parentID) {
  // makes some call to the db to save the new time stats

  var parentsRef = new Firebase(firebaseURI + "parents/" + parentID);
  var studentsTimeLogRef = parentsRef.child("students/" + studentID + "/time_log");

  // sets on time log with date in format:  YYMMDD
  var newTimeLog = {};

  var num = parseInt(readTime) || 0;
  newTimeLog[readDate] = num;
  studentsTimeLogRef.update(newTimeLog);

  return {
    type: Constants.SET_STUDENT_TIME,
    studentID,
    readDate,
    readTime,
  };
}

function setMinsReadState(event, studentID) {
  var value = event.target.value;
  return {
    type: Constants.SET_STUDENT_TIME_STATE,
    studentID,
    timeRead: Number(value),
  };
}

module.exports = {
  getStudentList,
  setStudentTime,
  addStudent,
  addStudentMobile,
  addStudentFailure,
  addStudentSuccess,
  setMinsReadState,
  timeFormIsValid,
  loginWithGoogle,
  isLoggedIn,
  logout,
};
