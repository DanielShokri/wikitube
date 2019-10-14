import React from "react";
import { connect } from "react-redux";
import {
  selectLightTheme,
  selectDarkTheme,
  selectBlueTheme
} from "../../store/theme/themeActions";
import { handleUserLogout } from "../../store/user/userActions";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchInput from "../SearchInput/SearchInput.cmp";

const AppHeader = ({
  isBlue,
  isDark,
  isLight,
  selectedLight,
  selectedDark,
  selectedBlue,
  currentUser,
  userLogout
}) => {
  const handleLightTheme = () => {
    isBlue(false);
    isDark(false);
    isLight(true);
  };

  const handleDarkTheme = () => {
    isBlue(false);
    isLight(false);
    isDark(true);
  };

  const handleBlueTheme = () => {
    isDark(false);
    isLight(false);
    isBlue(true);
  };

  const themeColor = () => {
    if (selectedDark) return "dark";
    if (selectedLight) return "light";
    if (selectedBlue) return "primary";
  };

  return (
    <Navbar
      bg={themeColor()}
      expand="lg"
      variant={selectedBlue || selectedDark ? "dark" : "light"}
    >
      <Link to="/">
        <Navbar.Brand>WikiTube</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Theme" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={handleLightTheme}>
              Light Theme
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleDarkTheme}>
              Dark Theme
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleBlueTheme}>
              Blue Theme
            </NavDropdown.Item>
          </NavDropdown>
          {currentUser ? (
            <Navbar.Text>
              <div style={{ cursor: "pointer" }} onClick={() => userLogout("")}>
                Logout, {currentUser.displayName}{" "}
                <img
                  style={{ width: "25px", borderRadius: "50px" }}
                  src={`https://i.pravatar.cc/150?u=${currentUser._id}`}
                  alt="Profile"
                />
              </div>
            </Navbar.Text>
          ) : (
            <Navbar.Text>
              <Link to="/signin">Login</Link>
            </Navbar.Text>
          )}
        </Nav>
        <SearchInput />
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapDispatchToProps = dispatch => ({
  isLight: lightTheme => dispatch(selectLightTheme(lightTheme)),
  isDark: darkTheme => dispatch(selectDarkTheme(darkTheme)),
  isBlue: blueTheme => dispatch(selectBlueTheme(blueTheme)),
  userLogout: logout => dispatch(handleUserLogout(logout))
});

const mapStateToProps = ({ themeReducer, userReducer }) => ({
  selectedLight: themeReducer.lightTheme,
  selectedDark: themeReducer.darkTheme,
  selectedBlue: themeReducer.blueTheme,
  currentUser: userReducer.currentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
