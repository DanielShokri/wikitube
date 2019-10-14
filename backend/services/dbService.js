const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://daniel:SyPJuiTyz3WbH6RT@cluster-tkhie.mongodb.net/test?retryWrites=true&w=majority"
    : "mongodb://localhost:27017";

// Database Name
const dbName = "WIKITUBE_USERS";

var dbConn = null;

async function connect() {
  if (dbConn) return dbConn;
  try {
    // mongodb+srv://daniel:159753@cluster-tkhie.mongodb.net/test?retryWrites=true&w=majority
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = client.db(dbName);
    dbConn = db;
    console.log("Connected to DB");
    return db;
  } catch (err) {
    console.log("Cannot Connect to DB", err);
    throw err;
  }
}

async function getCollection(collectionName) {
  const db = await connect();
  return db.collection(collectionName);
}

module.exports = {
  connect,
  getCollection
};
