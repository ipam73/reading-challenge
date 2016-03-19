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
    studentList: {}
  };
}

// setStudentTime dummy func
function setStudentTime() {
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
