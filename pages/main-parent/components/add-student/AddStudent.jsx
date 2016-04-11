var React = require('react');
var {Link} = require('react-router');

// redux stuff
var {connect} = require('react-redux');
var actions = require("../../actions");

require("!style!css!less!./AddStudent.less");

// new student button
// trigger clever login
var AddStudent = React.createClass({
  onClickFn: function() {
    // Router.browserHistory.push('/addstudent');
    window.location = '/addstudent';
    // trigger addStudent action
    // this.props.addStudent();
  },

  render: function() {
    return <div>
      <div className="panel application-panel container-fluid">
        <div className="SUMMARYPANEL--panel-default">
          <div className="SUMMARYPANEL--panel-body">
            <h3 className="SUMMARYPANEL--panel-title">Add another student</h3>

            <button onClick={this.onClickFn} className="btn btn-default">
              <img
                src="https://s3.amazonaws.com/assets.clever.com/sign-in-with-clever/sign-in-with-clever-medium.png"
                alt="Log in with Clever"
              />
            </button>
            <p>
              Click the button to add a student using their Clever login credentials.
              If you need help finding the right credentials please contact the school.
            </p>

          </div>
        </div>
      </div>



    </div>
  }
});

// module.exports = AddStudent;

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// wraps summary page with state and actions

// sets current state to summary page as this.prop
function mapStateToProps(state) {
  return {};
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps (dispatch) {
  return {
    addStudent: function(){ dispatch(actions.addStudent()); }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddStudent);


