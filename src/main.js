const { createUsersTable, insertUsers } = require("./concepts/basic-queries");

// test basic queries
async function testBasicQueries() {
  try {
    // await createUsersTable();
    // insert users
    // await insertUsers("JSingh", "j@j.com");
    // await insertUsers("JSingh2", "j@k.com");
    // await insertUsers("JSingh3", "j@l.com");
  } catch (error) {
    console.error("Error", error);
  }
}

async function testAllQueries() {
  await testBasicQueries();
}
testAllQueries();
