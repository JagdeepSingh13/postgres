require("dotenv").config();
const { Pool } = require("pg");

// create new pool instance to manage db connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function query(text, params) {
  const start = Date.now();

  try {
    const result = await pool.query(text, params);

    // execution time
    const duration = Date.now() - start;
    console.log(`Executed query: ${{ text, duration, rows: result.rowCount }}`);

    return result;
  } catch (e) {
    console.log("duration time error", e);
    throw e;
  }
}

module.exports = { query };
