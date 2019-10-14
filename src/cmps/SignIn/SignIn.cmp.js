import React from "react";
import { connect } from "react-redux";
import { handleUserSigning } from "../../store/user/userActions";
import FormInput from "../FormInput/FormInput.cmp";
import { Button } from "react-bootstrap";
import cogoToast from "cogo-toast";
import "./signin.styles.scss";

class SignIn extends React.Component {
  state = { email: "", password: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const { handleUserLogin } = this.props;

    try {
      const userAuth = await handleUserLogin(this.state);
      if (!userAuth) return cogoToast.warn("Password or email are not match!");
    } catch (error) {
      console.log("Error", error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <Button type="submit">SIGN IN</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleUserLogin: user => dispatch(handleUserSigning(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
