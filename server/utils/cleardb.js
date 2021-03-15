var db = require("../db/models/db");

async function public_force() {
  console.log("Public force executed");
  await db.models.permissions.destroy({
    where: {},
  });
  await db.models.users.destroy({
    where: {},
  });
  // await db.models.roles.destroy({
  // 	where: {},
  // });
}

async function main() {
  var schema = ["sequelize", true, public_force];

  console.log("Clearing the tables");

  console.log(schema);
  public_ret = await db[schema[0]].sequelize.sync({ force: schema[1] });

  console.log(schema[0] + " created");
  if (schema[1]) {
    force_ret = await schema[2]();
    console.log(schema[0] + " force param executed " + force_ret);
  }
  console.log("\n\n\n\n\n");
  process.exit();
}

if (require.main == module) {
  main();
}
