var db = require("../db/models/db");
async function public_force() {
  console.log("Public force executed");

  try {
    //User Management
    let users = [];
    for (let i = 0; i < 7; i++) {
      users[i] = await db.models.users.create({
        first_name: `FN_${i}`,
        last_name: `LN_${i}`,
      });
    }
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  var schema = ["sequelize", true, public_force];

  console.log("Creating the tables");

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
