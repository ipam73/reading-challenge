var Constants = require("../constants");
var _ = require("underscore");

var initialState = {
  studentList: {},
  timeForm: {},
  parentID: '1', // TODO - USE REAL PARENT ID
  user: null,
};

function getTotalTimeForStudent(student) {
  var time_log = student.time_log;
  var total_time = 0;

  if (time_log !== null && typeof time_log === 'object') {
    total_time = _.reduce(time_log, function(memo, num){ return memo + parseInt(num); }, 0);
  }

  return total_time;
}

function rootReducer(state, action) {
  if (!state) state = initialState;
  var newstate = _.clone(state);

  switch (action.type) {
    case Constants.GET_STUDENT_LIST:
      newstate.studentList = action.studentList; // whatever is returned from the list
      // not sure if we want to do this here or not
      var studentIDs = Object.keys(newstate.studentList);
      for (var student_id of studentIDs) {

        var totalTime = getTotalTimeForStudent(newstate.studentList[student_id]);

        console.log("setting newstate with new total_mins");
        newstate.studentList[student_id].total_mins = totalTime;

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

    case Constants.LOGIN_SUCCESS:
      console.log("reducer_user", action.user);
      newstate.user = {
          displayName: action.user.displayName,
          uid: action.user.uid,
      };
      return newstate;

    case Constants.LOGIN_FAILURE:
      // TODO: some error handling
      newstate.user = null;
      return newstate;

    case Constants.LOGOUT_SUCCESS:
      newstate.user = null
      return newstate;

    default:
      return newstate;
  }
}

module.exports = rootReducer;
