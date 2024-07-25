const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/recipeDB1";

const connect_db = async () => {
  await mongoose
    .connect(connectionString)
    .then(() => console.log(`The database is successfully connected`))
    .catch((err) =>
      console.error(`Failed to connect to the database: ${err.message}`)
    );
};

module.exports = { connect_db };

/*
class DBConnector{
    connect = async() => {
        await mongoose
        .connect(connectionString)
        .then(() => console.log(`The database is successfully connected`))
        .catch(err => console.error(`Failed to connect to the database: ${err.message}`));
    }
}

//done in main file/where connection is being instantiated/in app.js

const db_connector = new DBConnector();
db_connector.connect();

*/
