import React from "react";
import {connect} from "react-redux";
import actions from "../../../actions";
import TextInput from "../common/TextInput";
require("!style!css!less!../add-student/AddStudent.less");

// Signup Page
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "email",
        password: "password",
    };
    this.setEmailState = this.setEmailState.bind(this);
    this.setPasswordState = this.setPasswordState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  setEmailState(event) {
    console.log("setEmailState:", event.target.value);
    return this.setState({
      email: event.target.value, 
    });
  }

  setPasswordState(event) {
    return this.setState({
      password: event.target.value, 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("creating user with email:", this.state.email);

    this.props.createUser(this.state.email, this.state.password);
  }

  handleLogin(event) {
    event.preventDefault();
    console.log("login user with email:", this.state.email);

    this.props.loginWithPassword(this.state.email, this.state.password);
  }

  render() {
    console.log("render signup");
    return (
      <div>
        <div className="panel application-panel container-fluid container">
            <div className="content">
              <TextInput name="email" value={this.state.email} onChange={this.setEmailState}/>
              <TextInput name="password" value={this.state.password} onChange={this.setPasswordState}/>
              <input type="submit" value="Signup" onClick={this.handleSubmit}/>
              <input type="submit" value="Login" onClick={this.handleLogin}/>
            </div>
        </div>
      </div>
    );
  }
}

// currently not used for anything, no actions triggered on this page
function mapDispatchToProps(dispatch) {
  return {
    createUser: (email, password) => {
      dispatch(actions.createUser(email, password));
    },
    loginWithPassword: (email, password) => {
      dispatch(actions.loginWithPassword(email, password));
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(Signup);
