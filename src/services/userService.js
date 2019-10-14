import Axios from "axios";
var axios = Axios.create({
  withCredentials: true
});

export default {
  saveUser,
  handleUserLogin,
  saveUserSearch
};

async function handleUserLogin(user) {
  try {
    const res = await axios.post(`${_getUrl()}login`, user);
    if (res) return res.data;
  } catch (error) {
    return console.log("Couldnt find the user", error);
  }
}

async function saveUser(user) {
  try {
    const res = await axios.post(`${_getUrl()}signup`, user);
    return res.data.ops[0];
  } catch (error) {
    throw error;
  }
}

async function saveUserSearch(term) {
  try {
    const res = await axios.post(`${_getUrl()}search`, term);
    return res.data;
  } catch (error) {
    return console.log("cant save search term", error);
  }
}

function _getUrl(id = "") {
  const BASE_URL =
    process.env.NODE_ENV !== "development" ? "/user" : "//localhost:3000/user";
  return `${BASE_URL}/${id}`;
}
