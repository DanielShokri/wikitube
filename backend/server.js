const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const csp = require("express-csp-header");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const MongoClient = require("./services/dbService");

MongoClient.connect();
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

app.use(
  csp({
    policies: {
      "default-src": [csp.NONE],
      "img-src": [csp.SELF]
    }
  })
);

app.use(cookieParser());
app.use(
  session({
    secret: "1#24%rFcd#2S",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

const userRoute = require("./routes/userRoute");
app.use(userRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
