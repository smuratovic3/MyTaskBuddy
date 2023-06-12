const pg = require("pg");

pg.types.setTypeParser(1082, function (stringValue) {
  return stringValue;
});

const client = new pg.Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "rootUser",
  database: "mytaskbuddy",
});

module.exports = client;
