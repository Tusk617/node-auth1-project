
exports.seed = function(knex) {
  
  const users = [
    {username: "coolguy7", password: "password"}
  ];

  return knex("users")
  .insert(users)
  .then(() => {
    console.log("Ran seed data")
  })

};
