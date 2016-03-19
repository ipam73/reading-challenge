// library that deals with talking to backend
"use strict";

var Constants = require('../constants');
var $ = require("jquery");
var _ = require("underscore");


// getStudentList dummy func
// GET ALL THE DATA FOR STUDENTS
function getStudentList() {
  return {
    type: Constants.GET_STUDENT_LIST,
    studentList: {} //load this in the list in
  };
}

// setStudentTime dummy func
// can assume newTime = {dateRead: <date>, minuteRead: <minutes>}
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

// addStudent dummy func
function addStudent() {
  return {
    type: Constants.ADD_STUDENT,
    time: {}
  };
}

module.exports = {
  getStudentList: getStudentList,
  setStudentTime: setStudentTime,
  addStudent: addStudent
};
