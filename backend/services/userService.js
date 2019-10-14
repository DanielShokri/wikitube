const dbService = require("./dbService.js");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  addUser,
  handelUserLogin,
  handleUserSearchTerm
};

async function addUser(signupUser) {
  const collection = await dbService.getCollection("users_db");
  try {
    const checkIfEmailExist = await collection.findOne({
      email: signupUser.email
    });
    if (checkIfEmailExist) throw "Email already exists";
    const user = await collection.insertOne({
      displayName: signupUser.displayName,
      password: signupUser.password,
      email: signupUser.email,
      searchTerms: []
    });
    if (user) return user;
  } catch (err) {
    console.log(`ERROR: cannot Sign Up the user `, err);
  }
}

async function handelUserLogin(currUser) {
  const collection = await dbService.getCollection("users_db");
  try {
    const user = await collection.findOne({
      $and: [{ email: currUser.email }, { password: currUser.password }]
    });
    if (user) return user;
  } catch (err) {
    console.log(`ERROR: cannot find user `, err);
  }
}

async function handleUserSearchTerm(term, currUser) {
  const collection = await dbService.getCollection("users_db");
  try {
    const user = await collection.updateOne(
      { email: currUser.email },
      { $push: { searchTerms: term } }
    );
    if (user) {
      const updatedUser = await collection.findOne({
        email: currUser.email
      });
      return updatedUser;
    }
  } catch (error) {
    console.log(`ERROR: cannot update user `, error);
  }
}
