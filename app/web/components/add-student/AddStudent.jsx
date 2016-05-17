import React from "react";
import {connect} from "react-redux";
import actions from "../../../actions";
require("!style!css!less!./AddStudent.less");

// new student button
// trigger clever login
class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.onClickFn = this.onClickFn.bind(this);
  }

  onClickFn() {
    window.location = "/addstudent";
  }

  render() {
    return (
      <div>
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
    );
  }
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps(dispatch) {
  return {
    addStudent: () => {
      dispatch(actions.addStudent());
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(AddStudent);
