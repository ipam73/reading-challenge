// library that deals with talking to backend
var Constants = require('../constants');
var $ = require("jquery");
var _ = require("underscore");
// var Firebase = require('firebase');
// var firebaseURI = "https://reading-challenge.firebaseio.com/";
var Firebase = require('firebase')
var firebaseURI = "https://reading-challenge.firebaseio.com/"

// helper function for ajax calls
function getCookie(name) {
  var parts = document.cookie.split(name + "=");
  if (parts.length === 2) {
    var v = parts.pop().split(";").shift();
    return decodeURIComponent(v);
  }
}

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

function setFirebaseRef(ref) {
  return {
    type: 'FIREBASE_REF_SET',
    value: ref
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
  // return dispatch => {
  // return function (dispatch) {

    // TODO: use parentID instead of 1
    // const parentID = "1";
    // var ref = new Firebase(`${firebaseURI}parents/${parentID}`);
    var ref = new Firebase(firebaseURI + "parents/1");
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

// newTime = {readDate: <date>, readMinutes: <minutes>}
function setStudentTime(readDate, readTime, studentID) {
  // makes some call to the db to save the new time stats
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
  addStudentFailure,
  addStudentSuccess,
  setMinsReadState,
  timeFormIsValid,
};
