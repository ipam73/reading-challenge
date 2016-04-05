// library that deals with talking to backend
"use strict";

var Constants = require('../constants');
var $ = require("jquery");
var _ = require("underscore");

var StudentAPI = require('../../../lib/students');

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
  console.log("addStudent: ");

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

// getStudentList dummy func
// GET ALL THE DATA FOR STUDENTS
function getStudentList() {
  console.log("in action getStudentList");
  var studentList = StudentAPI.get_all_students();
  return {
    type: Constants.GET_STUDENT_LIST,
    studentList: studentList //load this in the list in
  };
}

// newTime = {readDate: <date>, readMinutes: <minutes>}
function setStudentTime(newTime) {
  console.log("in setStudentTime ACTION ");
  console.log("setting time: ");
  console.log(newTime);

  // makes some call to the db to save the new time stats
  return {
    type: Constants.SET_STUDENT_TIME,
    time: {}
  };
}

module.exports = {
  getStudentList: getStudentList,
  setStudentTime: setStudentTime,
  addStudent: addStudent,
  addStudentFailure: addStudentFailure,
  addStudentSuccess: addStudentSuccess
};
