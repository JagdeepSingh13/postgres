const { createUsersTable } = require("./concepts/basic-queries");

// test basic queries
async function testBasicQueries() {
  try {
    await createUsersTable();
  } catch (error) {
    console.error("Error", error);
  }
}

async function testAllQueries() {
  await testBasicQueries();
}
testAllQueries();
