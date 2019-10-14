import React from "react";

import SignIn from "../../cmps/SignIn/SignIn.cmp";
import SignUp from "../../cmps/SignUp/SignUp.cmp";

import "./signinandsignup.styles.scss";

const LoginAndSignupPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginAndSignupPage;
