var Constants = require("../constants");
var _ = require("underscore");

var initialState = {
  studentList: window.Bootstrap.student_list,
}

function rootReducer(state, action) {
  if (!state) state = initialState;

  var newstate = _.clone(state);

  switch (action.type) {
    case Constants.GET_STUDENT_LIST:
      newstate.studentList = action.studentList; // whatever is returned from the list
      return newstate;

    case Constants.SET_STUDENT_TIME:
      return newstate;

    case Constants.ADD_STUDENT:
      return newstate;

    case Constants.ADD_STUDENT_SUCCESS:
      return newstate;

    case Constants.ADD_STUDENT_FAILURE:
      return newstate;

    default:
      return newstate;
  }
}

module.exports = rootReducer;
