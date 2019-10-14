const express = require("express");
const router = express.Router();
const userService = require("../services/userService");
module.exports = router;

//User Login
router.post("/user/login", (req, res) => {
  const user = req.body;
  userService
    .handelUserLogin(user)
    .then(currUser => {
      req.session.loggedinUser = currUser;
      return res.json(currUser);
    })
    .catch(err => {
      throw err;
    });
});

//User Signup
router.post("/user/signup", (req, res) => {
  const user = req.body;
  userService
    .addUser(user)
    .then(user => res.json(user))
    .catch(err => {
      throw err;
    });
});

//Update user Search Array
router.post("/user/search", (req, res) => {
  const term = req.body;
  const user = req.session.loggedinUser;
  userService
    .handleUserSearchTerm(term, user)
    .then(terms => res.json(terms))
    .catch(err => {
      throw err;
    });
});
