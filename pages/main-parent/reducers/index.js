var Constants = require("../constants");
var _ = require("underscore");

var initialState = {
  studentList: {},
  timeForm: {},
};

function rootReducer(state, action) {
  if (!state) state = initialState;
  var newstate = _.clone(state);

  switch (action.type) {
    case Constants.GET_STUDENT_LIST:
      newstate.studentList = action.studentList; // whatever is returned from the list

      // not sure if we want to do this here or not
      var studentIDs = Object.keys(newstate.studentList);
      for (var student_id of studentIDs) {
        newstate.timeForm[student_id] = {
          errors: {},
          formIsValid: true,
          timeRead: 0,
        };
      }
      // not sure if we want to do this here or not

      return newstate;

    case Constants.ADD_STUDENT:
      return newstate;

    case Constants.ADD_STUDENT_SUCCESS:
      return newstate;

    case Constants.ADD_STUDENT_FAILURE:
      return newstate;

    case Constants.SET_STUDENT_TIME:
      // readDate,
      // readTime,
      newstate.timeForm[action.studentID].timeRead = action.readTime;
      return newstate;

    case Constants.TIME_FORM_IS_VALID:
      newstate.timeForm[action.studentID].errors = action.errors;
      newstate.timeForm[action.studentID].formIsValid = action.formIsValid;
      return newstate;

    case Constants.SET_STUDENT_TIME_STATE:
      newstate.timeForm[action.studentID].timeRead = action.timeRead;
      return newstate;

    default:
      return newstate;
  }
}

module.exports = rootReducer;
