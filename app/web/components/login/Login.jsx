import React from "react";
import {connect} from "react-redux";
import actions from "../../../actions";
require("!style!css!less!../add-student/AddStudent.less");

// login button
// trigger Google Login
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onClickFn = this.onClickFn.bind(this);
  }

  componentWillMount() {
    console.log("user", actions.isLoggedIn())
    if (actions.isLoggedIn()) {
       console.log("location", this.props.location);
    }
  }

  onClickFn() {
    this.props.loginWithGoogle();
  }

  render() {
    return (
      <div>
        <div className="panel application-panel container-fluid">
          <div className="SUMMARYPANEL--panel-default">
            <div className="SUMMARYPANEL--panel-body">
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

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps(dispatch) {
  return {
    loginWithGoogle: () => {
      dispatch(actions.loginWithGoogle());
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(Login);
