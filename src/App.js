import React from "react";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AppHeader from "./cmps/AppHeader/AppHeader.cmp";
import HomePage from "./pages/HomePage/HomePage.cmp";
import LoginAndSignupPage from "./pages/LoginAndSignupPage/LoginAndSignupPage.cmp";

import "./App.css";

function App({ selectedBlue, selectedDark, selectedLight, currentUser }) {
  const themeColor = () => {
    if (selectedBlue) return "blue-theme";
    if (selectedDark) return "dark-theme";
    if (selectedLight) return "light-theme";
  };

  return (
    <div className={themeColor()}>
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <LoginAndSignupPage />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ themeReducer, userReducer }) => ({
  selectedLight: themeReducer.lightTheme,
  selectedDark: themeReducer.darkTheme,
  selectedBlue: themeReducer.blueTheme,
  currentUser: userReducer.currentUser
});

export default connect(mapStateToProps)(App);
