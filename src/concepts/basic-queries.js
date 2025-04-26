const db = require("../db/db");

async function createUsersTable() {
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )
  `;

  try {
    db.query(createTableQuery);
    console.log("users table created");
  } catch (error) {
    console.error("Error while creating users table");
  }
}

async function insertUsers(username, email) {
  const insertUserQuery = `
  INSERT INTO users (username, email)
  VALUES ($1, $2)
  RETURNING *
  `;

  try {
    const res = await db.query(insertUserQuery, [username, email]);
    console.log("User inserted successfully", res.rows[0]);

    return res.rows[0];
  } catch (error) {
    console.error("Error while inserting into users table");
  }
}

module.exports = { createUsersTable, insertUsers };
