const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tcby",
  port: 5400,
});

module.exports = pool;
