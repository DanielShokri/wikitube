const express = require("express");
const router = express.Router();
const userService = require("../services/userService");
module.exports = router;

function requireAuth(req, res, next) {
  const user = req.session.loggedinUser;
  if (!user) return res.status(401).send("Unauthenticated");
  next();
}

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
    .then(user => {
      req.session.loggedinUser = user.ops[0];
      return res.json(user);
    })
    .catch(err => {
      throw err;
    });
});

//User Logout

router.post("/user/logout", requireAuth, (req, res) => {
  req.session.destroy();
  res.end();
  console.log("Logged Out");
});

//Update user Search Array
router.post("/user/search", requireAuth, (req, res) => {
  const term = req.body;
  const user = req.session.loggedinUser;
  userService
    .handleUserSearchTerm(term, user)
    .then(updatedUser => res.json(updatedUser))
    .catch(err => {
      throw err;
    });
});
