var Constants = require('../constants');
var _ = require("underscore");

var initialState = {
  studentList: {},
}

function rootReducer(state, action) {
  if (!state) state = initialState;

  var newstate = _.clone(state);

  switch (action.type) {
    case Constants.GET_STUDENT_LIST:
      return newstate;

    case Constants.SET_STUDENT_TIME:
      return newstate;

    case Constants.ADD_STUDENT:
      return newstate;

    default:
      return newstate;
  }
}

module.exports = rootReducer;
