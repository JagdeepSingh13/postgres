const {
  createUsersTable,
  insertUsers,
  fetchAllUsers,
  UpdateUserEmail,
  deleteUserInfo,
} = require("./concepts/basic-queries");

// test basic queries
async function testBasicQueries() {
  try {
    // await createUsersTable();
    // insert users
    // await insertUsers("JSingh", "j@j.com");
    // await insertUsers("JSingh2", "j@k.com");
    // await insertUsers("JSingh3", "j@l.com");
    // const allUsers = await fetchAllUsers();
    // console.log(allUsers);
    // const updatedUser = await UpdateUserEmail("JSingh2", "J@js.com");
    // console.log(updatedUser);
    const deletedUser = await deleteUserInfo("JSingh3");
    console.log(deletedUser);
  } catch (error) {
    console.error("Error", error);
  }
}

async function testAllQueries() {
  await testBasicQueries();
}
testAllQueries();
