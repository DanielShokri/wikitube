import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FormInput from "../FormInput/FormInput.cmp";
import { handleUserSignup } from "../../store/user/userActions";
import { Button, Alert } from "react-bootstrap";
import cogoToast from "cogo-toast";

import "./signup.styles.scss";

class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const { saveUserToDB } = this.props;
    if (password !== confirmPassword)
      return cogoToast.warn("Passwords doesn't match!");
    try {
      const userRegistered = await saveUserToDB(this.state);
      if (userRegistered) {
        cogoToast.success("Successfully Registered!");
        return this.props.history.push("/");
      }
      if (!userRegistered) throw Error;
    } catch (error) {
      cogoToast.warn("Error occurred, email already used");
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            onChange={this.handleChange}
            value={displayName}
            name="displayName"
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            onChange={this.handleChange}
            value={email}
            name="email"
            label="Email"
            required
          />
          <FormInput
            type="password"
            onChange={this.handleChange}
            value={password}
            name="password"
            label="Password"
            required
          />
          <FormInput
            type="password"
            onChange={this.handleChange}
            value={confirmPassword}
            name="confirmPassword"
            label="Confirm Password"
            required
          />
          {password !== confirmPassword ? (
            <Alert variant="danger">The passwords doesn't match!</Alert>
          ) : (
            ""
          )}
          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveUserToDB: user => dispatch(handleUserSignup(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignUp)
);
