const express = require("express");
const c = require("./controller");
const massive = require("massive");
require("dotenv").config();

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get();
app.post();
app.put();
app.delete();

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
});

app.listen(SERVER_PORT, () =>
  console.log(`Ain't nothing to it but to do it ✨:${SERVER_PORT}`)
);
