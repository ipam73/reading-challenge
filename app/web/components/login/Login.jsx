import React from "react";
import {connect} from "react-redux";
import actions from "../../../actions";
import Signup from "./Signup"
require("!style!css!less!../add-student/AddStudent.less");

// login button
// trigger Google Login
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onClickFn = this.onClickFn.bind(this);
  }

  onClickFn() {
    this.props.loginWithGoogle();
  }

  render() {
    console.log("render login");
    return (
      <div>
        <div className="panel application-panel container-fluid">
          <div className="SUMMARYPANEL--panel-default">
            <div className="SUMMARYPANEL--panel-body">
              <Signup object={this.props.newuser} />
              <h3 className="SUMMARYPANEL--panel-title">Sign in with Google</h3>

              <button onClick={this.onClickFn} className="btn btn-default">
                <img
                  src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png"
                  alt="Sign in with Google"
                />
              </button>
              <p>
              Click to login as a parent
              </p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginWithGoogle: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
}

// ....
function mapStateToProps(state) {
  console.log("mapStateToProps login");
  return {
    user: state.reducers.user,
  };
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps(dispatch) {
  return {
    loginWithGoogle: () => {
      dispatch(actions.loginWithGoogle());
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Login);
